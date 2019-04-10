# Trapper-Keeper
TrapperKeeper is a Google Keep clone which allows to create and edit their notes. When a user visits the home page, their previously created notes are displayed. The individual note-items can be marked as "completed," which will strikethrough the item text and move the item to the bottom of the note. A user may also delete any list-item or entire note. Changes persist upon reload as they are saved on a backend server. 

This project was a week long group project and created by Justin Torrance, [Kim Myers](https://github.com/kimmichurri), and [Joshua Lavarine](https://github.com/jlavar1).


## Marking items as "completed"
![checkboxes](https://user-images.githubusercontent.com/40274984/55854163-18d26200-5b21-11e9-8eed-ef6cd8ebaac1.gif)

## Deleting "list-items" and "notes"
![delete](https://user-images.githubusercontent.com/40274984/55854168-1b34bc00-5b21-11e9-924c-a2884dd0d545.gif)

## Creating a new note
![newnote](https://user-images.githubusercontent.com/40274984/55854175-1cfe7f80-5b21-11e9-9a93-4242ae3e4f24.gif)

## Wireframes
<img width="475" alt="Screen Shot 2019-04-10 at 8 14 51 AM" src="https://user-images.githubusercontent.com/40274984/55886348-c7e65c00-5b68-11e9-8cfe-23ecfd838352.png">
<img width="476" alt="Screen Shot 2019-04-10 at 8 15 02 AM" src="https://user-images.githubusercontent.com/40274984/55886353-c9b01f80-5b68-11e9-898b-ed1c64660b38.png">

## Set-up when cloning this repository
1) mkdir Trapper-Keeper-Main
### Installing the backend:
2) In your browser, navigate to https://github.com/kimmichurri/notez-api
3) Follow repository instructions to download and install the backend
### Installing the frontend:
4) cd Trapper-Keeper-Main
5) git clone git@github.com:JustinTorrance/notez.git
6) cd notez
7) npm install
8) npm start

## Tech / Frameworks Used
- ReactJS
- Redux
- React Router
- Node.js (backend)
- Express.js (backend)
- SASS
- JSX
- fetch API
- localStorage
- Testing with Enzyme & Jest

## What we learned
We learned how to effectively implement Redux and React-Router into our ReactJS application. Understanding how all parts of Redux (including Actions, Action Creators, Reducers, Dispatch, and State) tie into the Redux store. By successfully implementing Redux, we were able to remove the necessity for "prop drilling." Implementing React-Router enabled us to turn our single page React app into a more robust multi-page application. 

Creating a backend was a very interesting aspect of the project as our previous backend projects were pre-built.

## Challenges faced
Testing the front-end is notoriously difficult and this project did not prove the exception. 

Another challenge faced was understanding the process of Redux and how all the pieces communicate with each other. 

## "Wins"
Overall, we are pleased with the outcome of the project given the time-frame in which we worked (one week). The front-end is 90% tested. While we were not able to implement everything in our GitHub issues, we reached our Minimum Viable Product (M.V.P.). Users can add new notes and delete list-items and entire notes alike. 

## Future Implementations
In future, we would like to expand upon the functionality of the notes. We'd like to implement the ability to edit our notes. 

## Tools Used
[VSCode](https://code.visualstudio.com/)

## Credits
http://frontend.turing.io/projects/trapper-keeper.html
