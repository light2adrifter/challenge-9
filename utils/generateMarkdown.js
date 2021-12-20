// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-informational) <br />
  `
}

//Creates a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `
  -[Liscense](#liscense)`

}

//Creates a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  ## License
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-informational)`
}

//Creates a function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
  <h1>${userResponse.title}</h>

  ${renderLicenseBadge()}

  ## Description

  ${userResponse.description}

  ## Table of Contents
  -[Description](#description) <br/>
  -[Installation](#installation) <br/>
  -[Ussage](#usage) <br/>
  ${renderLicenseLink} <br/>
  -[Contribution](#contribution) <br/>
  -[Tests](#tests) <br/>
  -[Questions](#questions) <br/>

  ## Installation
  ${userResponse.install}

  ## Usage
  ${userResponse.usage}

${renderLicenseSection}

  ## Contribution
  ${userResponse.contribution}

  ## Tests
  ${userResponse.tests}

  ## Questions

  Any questions, comments or concerns, reach out to ${userResponse.userName} at ${userResponse.email}.


`

;
}

module.exports = generateMarkdown;
