// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a discription for this project.'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Add your table of contents here.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'How do you use this project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users text this product?'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
