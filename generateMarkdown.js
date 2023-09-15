// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    return '';
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license.replaceAll(` `, `%20`)}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
  if (link === undefined) {
    return '';
  } else {
    return link;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  return `This project is licenced under [${license}](${link})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,link) {
  let badge = renderLicenseBadge(data.license)
  let licenseLink = renderLicenseLink(link)
  let licenseSection = renderLicenseSection(data.license,licenseLink)
  return `
# ${data.title}
${badge}
## Description
${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
If you have any questions or concerns regarding this project, I can be contacted via email at the following address
${data.email}
Additionally my github profile can be located by using the following link
https://github.com/${data.username}

`;}

module.exports = generateMarkdown;