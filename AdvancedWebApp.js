/* 
Filename: AdvancedWebApp.js
Content: A sophisticated and elaborate JavaScript code demonstrating a feature-rich web application with multiple functionalities and complex logic.
*/

// Global variables
let userData = [];
let loggedInUser = null;

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    loggedInUser = this;
    console.log("User logged in: " + this.username);
  }

  logout() {
    loggedInUser = null;
    console.log("User logged out.");
  }

  postMessage(message) {
    if (loggedInUser === this) {
      console.log("Message posted by " + this.username + ": " + message);
    } else {
      console.log("You must be logged in to post a message.");
    }
  }
}

// Add user to the system
function addUser(username, password) {
  const newUser = new User(username, password);
  userData.push(newUser);
}

// Get user by username
function getUserByUsername(username) {
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].username === username) {
      return userData[i];
    }
  }
  return null;
}

// Web Application Functions
function displayHomePage() {
  console.log("Welcome to our advanced web application!");
  console.log("Please log in or sign up to continue.");
}

function displayDashboard() {
  console.log("Dashboard - User: " + loggedInUser.username);
  console.log("Today's Messages:");

  // Display messages posted by logged-in user
  for (let i = 0; i < userData.length; i++) {
    const user = userData[i];
    if (user === loggedInUser) {
      user.postMessage("Today is a great day!");
    }
  }

  // Display messages posted by other users
  for (let i = 0; i < userData.length; i++) {
    const user = userData[i];
    if (user !== loggedInUser) {
      user.postMessage("Hello, world!");
    }
  }
}

// The below code simulates some actions in our web application
addUser("alice", "password123");
addUser("bob", "password456");
addUser("charlie", "password789");

displayHomePage();

const alice = getUserByUsername("alice");
alice.login();
displayDashboard();

const bob = getUserByUsername("bob");
bob.login();
displayDashboard();

bob.logout();
displayDashboard();

alice.logout();
displayDashboard();