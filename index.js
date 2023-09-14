const inquirer = require('inquirer')
const fs = require('fs');
const gm = require('./generateMarkdown');

let questions;
// Retireve the names of commonly used licenses, then calls the initialize function which accepts the license names
// Finally initiates the prompt once setup is complete
function prepareLicenseNames() {
    const licenseNames = [];
    fetch(`https://api.github.com/licenses`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data.forEach(element => {
            licenseNames.push(element.name)
        });;
        initializeQuestions(licenseNames)
        startPrompt(questions)
    })
}
// Initialize the questions object for use in the inquirer prompt method
function initializeQuestions(choices){
    questions = [
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
            choices: choices
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
}
// Starts the prompt when called and handles the answers object when complete
function startPrompt(questions) {
    inquirer.prompt(questions)
        .then((answers) => {
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error);
            } else {
                console.error('Something went wrong', error);
            }
        })
}
prepareLicenseNames()
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data,)
}