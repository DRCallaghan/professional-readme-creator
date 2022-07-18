// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's title?",
    'What was your motivation?',
    'Why did you build this project?',
    'What problem does it solve?',
    'What did you learn?',
    'What makes your project stand out?',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    'Provide instructions and examples for use. Include screenshots as needed.',
    'List your collaborators, if any, with links to their GitHub profiles.',
    'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
    'If you followed tutorials, include links to those here as well.',
    'Which license would you like to use?',
    'What are your guidelines for contribution to this project?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'motivation',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'reason',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'problem',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'lesson',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'uniqueness',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'collaborators',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'thirdParties',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'tutorials',
            },
            {
                type: 'input',
                message: questions[11],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[12],
                name: 'contribution',
            }
        ])
}

// Function call to initialize app
init();
