## Table of Contents:
About The Project  
Built With  
Getting Started  
Contact  
Acknowledgments  

## About The Project:
This file is the backend file for the Carbon Footprint Calculator Widget, take home task.
This widget calculates CO2 production based on user input for driving, diet factors and subscribes users to a newsletter.

## Built With:
### Backend
HTML, Node.js, Javascript, MongoDB

This file is connected to MongoDB with collections for: driveSchema: daysOfDriving, carbonProduced; dietSchema: daysPerWeek, carbonProduced; subscribeSchema: email address

### Packages
npm i,
nodemon (-D in devDependencies),
express,
dotenv,
cors,
mongodb,
mongoose

## Getting Started
Once git repo is cloned, create .env file,
add MONGO_URI connection string to .env file,
add PORT = 3000,
once all the above packages are installed use
npm run dev to launch the app on PORT 3000

## Contact
Jennifer Rothrock - jennifer.r.rothrock@gmail.com

Project Link: Carbon Footprint Calculator
https://github.com/jeniverede/carbon_widget_be.git

## Collaborators
Kate Oblomova - testing