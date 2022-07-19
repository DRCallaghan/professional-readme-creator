// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generateLicense = require('./utils/generateLicense.js');

// Creating an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        message: 'What is your the title of your project? (Required)',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A project title is required.');
                return false;
            }
        }
    },
    // motivation for creating the project
    {
        type: 'input',
        message: 'Why did you build this project? (Required)',
        name: 'reason',
        validate: reasonInput => {
            if (reasonInput) {
                return true;
            } else {
                console.log('A reason for building this project is required.');
                return false;
            }
        }
    },
    // problem solved by the project
    {
        type: 'input',
        message: 'What problem does it solve? (Required)',
        name: 'problem',
        validate: problemInput => {
            if (problemInput) {
                return true;
            } else {
                console.log('A problem you solved with this project is required.');
                return false;
            }
        }
    },
    // something the author learned while working on the project, in the event that others want to learn similar things
    {
        type: 'input',
        message: 'What did you learn? (Required)',
        name: 'lesson',
        validate: lessonInput => {
            if (lessonInput) {
                return true;
            } else {
                console.log('A lesson you learned with this project is required.');
                return false;
            }
        }
    },
    // something unique about the project; a reason for people to use this project over other similar ones
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'uniqueness',
        validate: uniquenessInput => {
            if (uniquenessInput) {
                return true;
            } else {
                console.log('A reason your project stands out is required.');
                return false;
            }
        }
    },
    // installation procedures
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation steps for this project are required.');
                return false;
            }
        }
    },
    // usage instructions and/or examples
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Instructions for usage are required.');
                return false;
            }
        }
    },
    // collaborators
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'collaborators',
        default: 'There were no collaborators on this project. My information can be found in Additional Info.'
    },
    // third-party assets
    {
        type: 'input',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'thirdParties',
    },
    // tutorials
    {
        type: 'input',
        message: 'If you followed tutorials, include links to those here as well.',
        name: 'tutorials',
    },
    // license type. only popular licenses on https://choosealicense.com were listed.
    {
        type: 'list',
        message: 'Which license would you like to use? (Required)',
        name: 'license',
        choices: ['GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense'],
        default: 5,
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Choosing a license is required.');
                return false;
            }
        }
    },
    // contribution guidelines
    {
        type: 'input',
        message: 'What are your guidelines for contribution to this project?',
        name: 'contribution',
        default: 'There are no guidelines for contribution as this project is closed.'
    },
    // testing guidelines
    {
        type: 'input',
        message: 'What are your guidelines for testing this project?',
        name: 'testing',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please enter your guidelines for testing.');
                return false;
            }
        }
    },
    // github username
    {
        type: 'input',
        message: 'What is your github username? (Required)',
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your username.');
                return false;
            }
        }
    },
    // email address
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    }
];

// creating a function to write the README.md and LICENSE.txt
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log(`Successfully created ${fileName}!`);
    })
}

// initialization function
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile('README.md', generateMarkdown(response));
            writeToFile('LICENSE.txt', generateLicense(response));
        });
}

// Function call to initialize app
init();
