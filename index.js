import express from "express";
import "./mongoose.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

import { playerModel, stopwatchModel } from "./model.js";
import { HashPassword, VerifyPassword, VerifyToken } from "./utils/index.js";
import { Auth } from "./middleware/index.js";

const PORT = process.env.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/user/:id", (req, res) => {
  const user = VerifyToken(req.params.id.split(" ")[1]);
  return res
    .status(201)
    .cookie(
      "data",
      JSON.stringify({
        id: req.params.id.split(" ")[1],
        username: user.name,
      })
    )
    .render("index");
});

app.post("/", async (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  if (data.password && data.username) {
    const user = await playerModel.findOne({
      username: data.username,
    });
    if (user) {
      return res.status(403).send("User already exist");
    } else {
      try {
        const hashedPassword = HashPassword(data.password);
        const player = new playerModel({
          ...data,
          password: hashedPassword,
        });
        player.save();
        return res.status(200).json({
          message: "Successfully registered",
          ...player,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).send("user not created");
      }
    }
  } else {
    return res.status(404).send("Complete Data is not provided");
  }
});

app.post("/login", async (req, res) => {
  res.clearCookie();
  const data = JSON.parse(JSON.stringify(req.body));
  if (data.password && data.username) {
    const user = await playerModel.findOne({
      username: data.username,
    });
    if (user) {
      const isAuth = VerifyPassword(data.password, user.password);
      const token = Jwt.sign(
        {
          name: user.username,
          id: user._id,
        },
        process.env.SECRET
      );
      if (isAuth) {
        res.setHeader("Authorization", `Bearer ${token}`);
        return res.status(201).send("Yes user existed");
      } else {
        return res.status(401).send("user not existed");
      }
    } else {
      return res.status(404).send("User does not exist in our database");
    }
  } else {
    return res.status(404).send("Complete Data is not provided");
  }
});

// Method to Reset password

app.post("/ChangePassword", async (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  if (data.username) {
    try {
      await playerModel.findOneAndUpdate(
        {
          username: data.username,
        },
        {
          password: HashPassword(data.password),
        }
      );
      return res.status(201).send("Successfully Updated");
    } catch (error) {
      return res.status(401).send("Falied to update password");
    }
  } else {
    return res.send(404).send("user Doesn't exist");
  }
});
app.get("/auth", Auth, (req, res) => {
  return res.status(200).send("User is authorize");
});

app.get("/data", Auth, (req, res) => {
  return res.status(201).send(req.user.name);
});

app.get("/logout", (req, res) => {
  return res.status(201).send("User logged out");
});

app.get("/analytics", Auth, async (req, res) => {
  const data = await stopwatchModel.find({
    user: req.user.id,
  });
  return res.status(201).send(data);
});

app.post("/stopwatch", Auth, (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  console.log(data);
  try {
    const stopwatch = new stopwatchModel({
      username: req.user.name,
      time: data.time,
      user: req.user.id,
    });
    stopwatch.save();
    return res.status(201).send("time updated");
  } catch (error) {
    return res.status(404).send("Request not complete");
  }
});

app.listen(PORT, async () => {
  console.log(`Listening to Port ${PORT}`);
});
