// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'motivation',
        message:"What was your motivation?",   
    }, 
    {
        type: 'input',
        name: 'build',
        message:"Why did you build this project?",  
    },  
    {
        type: 'input',
        name: 'problemSolved',
        message:"What problem does it solve?",
        
    }, 
    {
        type: 'input',
        name: 'learned',
        message:"What did you learn?",   
    },
    {
      type:'input',
      name:'title',
      message: 'What do you want to call this project',
    },
    {
      type:'input',
      name:'description',
      message: 'How would you describe this project',
    },
    {
      type:'input',
      name: 'installation',
      message: 'What would you use to install this app?',
    },
    {
      type:'input',
      name:'usage',
      message: 'How would you use this project',
    },
    {
      type:'input',
      name:'credits',
      message: 'Did anyone help you on this project?',
    },
    {
      type:'input',
      name:'license',
      message: 'What license is used for this project?',
    },
];


// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(`./${fileName}`, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions
    /* Pass your questions in here */

  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("results...") 
    console.log(answers)
    writeToFile("README.md", generateMarkdown(answers))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});  
}

// Function call to initialize app
init();
