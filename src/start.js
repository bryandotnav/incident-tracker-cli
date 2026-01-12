const { showMenu } = require('./menu.js');

// This is the main entry point for the application.
const startApp = () => {
  console.clear();
  console.log("Welcome to Your Incident Log Tracker!\n");
  showMenu();
  console.log("We hope you enjoyed this experience. Goodbye!");
}

startApp();