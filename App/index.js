// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
      },
      {
        type: 'input',
        name: 'description',
        message: "What is the purpose of this project; what problem does it solve?",
      },
      {
        type: 'input',
        name: 'installation',
        message: "What are the steps to installing your project?",
      },
      {
        type: 'input',
        name: 'usage',
        message: "How is your application used?",
      },
      {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?",
      },
      {
        type: 'input',
        name: 'tests',
        message: "How can users test this application?",
      },
      {
        type: 'list',
        message: "Which license will you use for this project?",
        name: 'license',
        choices: ['The MIT License',  'GPLv3', 'Apache 2.0 License','BSD 3', 'none'],
      },
      {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
      },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync("README.md", generateMarkdown(data), )
    };
    
    
 // Create a function to initialize app
    function init() {
        inquirer
        .prompt(questions)
        .then((data)=>{
          console.log(data);
          writeToFile("readme.md", data)
        })
    };

// Function call to initialize app
init();
