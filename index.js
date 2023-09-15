const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

let questions;
// Retireve the names of commonly used licenses, then calls the initialize function which accepts the license names
// Finally initiates the prompt once setup is complete
function prepareLicenseNames() {
    const licenseNames = [];
    const licenseKeys = [];
    fetch(`https://api.github.com/licenses`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(element => {
                licenseNames.push(element.name);
                licenseKeys.push(element.url);
            });
            initializeQuestions(licenseNames);
            startPrompt(questions, licenseNames, licenseKeys);
        })
}
function makeLicenseLinks(keys) {
    const links = [];
    keys.forEach(element => {
        links.push(`https://choosealicense.com/licenses/${element.slice(32)}`);
    });
    return links;
}
// Initialize the questions object for use in the inquirer prompt method
function initializeQuestions(choices) {
    questions = [
        {
            name: 'title',
            type: 'input',
            message: 'Title:',
        },
        {
            name: 'desc',
            type: 'input',
            message: 'Description:',
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
            message: 'Contribution Guidelines:',
            default: 'This project is not currently seeking any collaborators'
        },
        {
            name: 'test',
            type: 'input',
            message: 'Test Instructions:',
            default: 'This project does not currently implement any test functionality'
        },
        {
            name: 'license',
            type: 'list',
            message: 'Select which license to include:',
            choices: choices,
        },
        {
            name: 'username',
            type: 'input',
            message: 'GitHub Username:',
            default: 'galvin-sh'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Contact Email:'
        }
    ];
};
// Starts the prompt when called and handles the answers object when complete
function startPrompt(questions, licenses, keys) {
    inquirer.prompt(questions)
        .then((answers) => {
            //after recieving the answers, will run the following to begin assembling the readme
            const links = makeLicenseLinks(keys)
            const isLicense = (element) => element == answers.license;
            const index = licenses.findIndex(isLicense);

            writeToFile(generateMarkdown(answers, links[index]));
        })
}
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) => {
        if (err) throw err;
        console.log(`Successfully wrote README.md`)
    }
    );
};
prepareLicenseNames();