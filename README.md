# Eat-Da-Burger
## Overview
The Eat-Da-Burger application is a simple app that allows the user to look at a menu of available burgers and eat one, as well as create a new burger to add to the menu and then have the option to eat.
Heroku Link: https://murmuring-fjord-71978.herokuapp.com/burgers
## How it Works
The user will begin on the home page. Three interconnected sections will populated the screen. The first section is the Menu. The menu consists of burgers that exist in the database that contain the value Devoured: False. The user can choose to click the "Devour" button and the burger will move to the Eaten section. The eaten section consists of every burger in the database that contains the value Devoured: True. Laslty, the user will be able to input their own unique burger in the input section. This newly created burger will populated the Menu section.
## Technologies Used
This application is intended to focus on the use of ORM's and Handlebars. Handlebars populates the user interface with the data collected in the back-end. Mysql was used to store the database. Of course, Node is used to run the app from the terminal. This app is dependent on mysql, express, and express-handlebars
## Role
This is a solo project. As the only developer, I analyzed and interpreted the needs, wants, and requirements of the Product Owner (Trilogy) and created a functioning application from top to bottom that met those expectations.
