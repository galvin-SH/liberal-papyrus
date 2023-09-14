// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const gm = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Title:'
    },
    {
        name: 'desc',
        type: 'input',
        message: 'Description:'
    },
    {
        name: 'install',
        type: 'input',
        message: 'Installation Instructions:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Usage Information:'
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'Contribution Guidelines:'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Test Instructions:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select which license to include:',
        choices: [
            'Apache 2.0',
            'GNU v3.0',
            'MIT',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Boost Software 1.0',
            'Creative Commons Zero v1.0',
            'Eclipse Public 2.0',
            'GNU Affero General Public v3.0',
            'GNU General Public v2.0',
            'GNU Lesser General Public v2.1',
            'Mozilla Public 2.0',
            'The Unlicense']
    },
    {
        name: 'username',
        type: 'input',
        message: 'GitHub Username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Contact Email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    })
};

// Function call to initialize app
init();