// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
const licenses = require('licenses');
// const renderLicenseBadge = require('licenseBagde');
// const returnLicenseSection = require('licenseSection');

// function licenses.list().then((list) => {
//   console.log(list);
// }).catch((err) => {
//   console.error(err);
// });

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your name?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your github User Name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },
  {
    type: 'input',
    name: 'motivation',
    message: "What was your motivation?",
  },
  {
    type: 'input',
    name: 'build',
    message: "Why did you build this project?",
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: "What problem does it solve?",

  },
  {
    type: 'input',
    name: 'learned',
    message: "What did you learn?",
  },
  {
    type: 'input',
    name: 'title',
    message: 'What do you want to call this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe this project?',
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: 'Does this project have a table of contents?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What would you use to install this app?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would you use this project?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Did anyone help you on this project?',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What license is used for this project?',
    choices: ['MIT', 'GPLv3', 'Apache 2.0'],
    
  },
  {
    type: 'input',
    name: 'test',
    message:'How do you test this project?',
  },
];


// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // return fs.writeFileSync(`./${fileName}`, data)
  fs.writeFileSync(`./${fileName}`, data);
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
  
}

// Function call to initialize app
init();
