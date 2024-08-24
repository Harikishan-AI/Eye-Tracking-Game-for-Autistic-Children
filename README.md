# Eye Tracking Games for Autistic Children

## Objective

This project focuses on developing two interactive games designed to enhance the cognitive abilities of autistic children using eye-tracking technology. The games aim to measure and improve attention, concentration, and reaction time, offering a unique and non-invasive method to monitor progress over time.

## Games

### Game 1: Stopwatch

The Stopwatch game tests the child's reaction time. After registering with a username, the child logs in and controls the game using their eyes. The objective is to start and stop the game within a very short timeframe. Reaction times are analyzed and plotted in charts to monitor improvement. A consistent decrease in reaction time suggests progress, potentially reducing the need for medication. If no improvement is observed, medical intervention might be necessary.

### Game 2: Coin Collection (Under Development)

The Coin Collection game, currently under development, involves using eye movements to collect coins. The game features engaging graphics to capture and maintain the child's interest. Once all the coins are collected, the score is displayed and stored in a MongoDB database. This data is then visualized through graphs for detailed performance analysis.

## Data Analysis and Visualization

Data collected during gameplay, including reaction times and scores, is stored in a MongoDB database. This data is visualized in graphs to track the child's progress over time. Doctors can use these graphs to monitor gameplay consistency and evaluate the effectiveness of the game in improving cognitive abilities, helping determine if further treatment or intervention is needed.

## Architecture Diagram

![image](https://github.com/user-attachments/assets/01f0e180-20d5-4feb-8ecf-297c7da5a0c2)

## Implementation

### Unity

Unity serves as the front-end for users, handling essential functionalities such as login and registration. It features:
- **Main Game Menu**: Allows users to choose from available games.
- **Analytics Page**: Provides access to user analytics after each game is played.

### Node.js

Node.js acts as the intermediary between the front-end (Unity) and the back-end (MongoDB). It is responsible for:
- **Session Management**: Associates each user login with a session cookie for authorization and tracks user data.
- **Session Timeout**: Monitors idle time to handle session timeouts.
- **Analytics Integration**: Utilizes Chart.js for visualizing game data and user performance.

### MongoDB

MongoDB is used as the database for storing and managing game data. It includes:
- **USERS Schema**: Stores user authentication credentials with encrypted passwords.
- **Game Schemas**: Includes separate schemas for each game. For example:
- **STOPWATCH Schema**: Records the reaction time of each user, which is then used to generate performance graphs with Chart.js.

![image](https://github.com/user-attachments/assets/86816d9e-6bdd-4e5c-b3d0-0571d7b10e78)

## Results and Discussion

Below are the charts of different users (autistic children). As we can infer from the graphs that it records the 
reaction time of the user with respect to each game trial that they play. From this we can deduce that whether 
there is any improvement in their performance i.e., whether their reaction time decreases with the increase in 
the number of game trials. Doctors can perform analysis with the help of these graphs and suggest the various 
steps that is supposed to be taken in the future. Doctors can also monitor whether if the patient is playing the 
game consistently.

![image](https://github.com/user-attachments/assets/cd2957ea-ab46-4ba1-a309-b78e61952576)


