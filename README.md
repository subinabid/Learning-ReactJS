# Learn ReactJS
I am a Django user trying to learn frontend development. This is my step by step approach to learn ReactJS. Every tutorial I saw online does not tell where to start. Most gives a sample code, but fails to say where to put it. There coule be better approaches, or I could be totally wrong, this may be taken with a pinch of salt.

[This](https://www.taniarascia.com/getting-started-with-react/) is something i came across, which is easy to understand


# Setup your machine
1. Install [nodeJS](https://nodejs.org/en/)
2. Install `create-react-app` using the command `npm install -g create-react-app` in your terminal. From some tutorials, I understand this is not required if you are uning `npx` in coming steps, but I couldnt get things running till I did this.
3. Create the project folder that you want to use on your machine. I use a windows machine (*Yes, you read it right*). A folder like `D:\Projects\ReactJS\` and navigate to the folder
4. Initiate your react app using `npx create-react-app appname` in terminal. This should create a bunch of files and folders .
5. `cd appname` in terminal
6. Run the app by using `npm start` in terminal. 
7. Go to (http://localhost:3000/) in your browser. You should be able to see the ReactJS logo!

# Folders
There should be a `public` folder with in `public/index.html` file inside. Similarly, there should be a `src/index.js` file also. These files should not be renamed.

# Basic Structure
* `public/index.html` is displayed when the app is requested
* There should be an addressable `div` inside it, lets say `<div id = "root"></div>`
* `src/index.js` populates the root div with whatever is to be displayed
* components used to populate the html can be written in the `src/index.js` itself or other `.js` files like `App` or `Table` in my example

# Props
Props are used to send data in reverse direction, i.e Passing info from `App.js` to sub components (`Table`). Props are read only in the components 