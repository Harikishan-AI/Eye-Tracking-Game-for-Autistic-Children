# Eye Tracking Game for Autistic Children

## Objective

This project focuses on developing two interactive games designed to enhance the cognitive abilities of autistic children using eye-tracking technology. The games aim to measure and improve attention, concentration, and reaction time, offering a unique and non-invasive method to monitor progress over time.

## Games

### Game 1: Stopwatch

The Stopwatch game tests the child's reaction time. After registering with a username, the child logs in and controls the game using their eyes. The objective is to start and stop the game within a very short timeframe. Reaction times are analyzed and plotted in charts to monitor improvement. A consistent decrease in reaction time suggests progress, potentially reducing the need for medication. If no improvement is observed, medical intervention might be necessary.

### Game 2: Coin Collection (Under Development)

The Coin Collection game, currently under development, involves using eye movements to collect coins. The game features engaging graphics to capture and maintain the child's interest. Once all the coins are collected, the score is displayed and stored in a MongoDB database. This data is then visualized through graphs for detailed performance analysis.

## Data Analysis and Visualization

Data collected during gameplay, including reaction times and scores, is stored in a MongoDB database. This data is visualized in graphs to track the child's progress over time. Doctors can use these graphs to monitor gameplay consistency and evaluate the effectiveness of the game in improving cognitive abilities, helping determine if further treatment or intervention is needed.

## Architecture

- **Unity**: Provides the front-end interface for the game and user interaction.
- **Node.js**: Connects Unity with MongoDB, manages user sessions, and integrates with Chart.js for data visualization.
- **MongoDB**: Stores user data, reaction times, and game scores. Data is visualized using Chart.js.



![image](https://github.com/user-attachments/assets/01f0e180-20d5-4feb-8ecf-297c7da5a0c2)

![image](https://github.com/user-attachments/assets/86816d9e-6bdd-4e5c-b3d0-0571d7b10e78)

![image](https://github.com/user-attachments/assets/cd2957ea-ab46-4ba1-a309-b78e61952576)
