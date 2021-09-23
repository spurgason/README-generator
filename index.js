// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
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
        name: 'install',
        message: 'How do you install this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project use?',
        choices: ['MIT', 'Apache 2.0', 'GNU General Public License (GPL) 2.0', 'GNU General Public License (GPL) 3.0', 'None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users test this product?'
    }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            throw err;
        } else {
            console.log('README.md has been generated');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
           writeToFile('README.md', generateMarkdown(data))

        })
}

// Function call to initialize app
init();
