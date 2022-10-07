# Project-2 - Road Trip Planner

![First_Screenshot](<public/assets/Screenshot%20(80).png>)
![Second_Screenshot](<public/assets/Screenshot%20(81).png>)
[React Scheduler Demonstration.webm](https://user-images.githubusercontent.com/107437104/194456449-34acb8df-e39d-40cd-a406-9d8b3f4ce838.webm)


## Description

This application is designed to help users plan trips and store all of their plans in one location.
When you open the application, you'll be prompted to either sign up or login, and then you'll be able to input details for any trips you have, as well as their associated dates.

## Installation

1. Go to the repository page of the application (linked below), and press the green button that says "Code."
2. Copy the HTTPS link that is displayed in the pop-up.
3. Using Git Bash, select the directory where you'd like to save the application.
4. Type out "git clone" followed by the copied link from Step 2 and press Enter.
5. Open the file using VS Code.
6. In the ".env" file, make sure that the DB_Name is listed as 'planner_db'.
7. Enter in your username and password into the .env file where indicated.
8. Open the root directory of the application in the Integrated Terminal.
9. Type in "mysql -u root -p", press Enter, enter in your password when prompted, then press Enter again.
10. Type in "source db/schema.sql" and press Enter.
11. Type "quit" in the terminal to exit out of mySQL.
12. Type "node server.js" in the Integrated Terminal and press Enter.
13. Open up you browser, and type "localhost:3001/" into the address bar and press Enter.

## Future Improvements

In the future, we’d like to add an existing application that can add restaurants and their locations with information about their websites for easier access through our app.
We’d also like to have our app be able to give directions, similar to Google Maps.

## Credits
