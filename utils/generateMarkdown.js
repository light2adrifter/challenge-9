//Creates a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-informational) <br />
  `;
}

//Creates a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink (license) {
  if (!license) {
    return '';
  }
  return `
  -[Liscense](#liscense)
  `;

}

//Creates a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
  <br/>
  ## License
  ![badge](https://img.shields.io/badge/license-${userResponse.license}-informational) <br />
  `;
}

//Creates a function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
  <h1>${userResponse.title}</h>

  ${renderLicenseBadge(userResponse.license)}

  
  ## Table of Contents
  -[Description](#description) <br/>
  -[Installation](#installation) <br/>
  -[Usage](#usage)
  ${renderLicenseLink(userResponse.license)}
  -[Contribution](#contribution) <br/>
  -[Tests](#tests) <br/>
  -[Questions](#questions) <br/>


  ## Description

  ${userResponse.description}
  
  ## Installation
  ${userResponse.install}
  
  ## Usage
  ${userResponse.usage}
  
  ${renderLicenseSection(userResponse.license)}
  
  ## Contribution
  ${userResponse.contribution}
  
  ## Tests
  ${userResponse.tests}
  
  ## Questions
  
  Any questions, comments or concerns, reach out at ${userResponse.email}.

  Git hub available at: [${userResponse.userName}](https://github.com/${userResponse.userName})


  

`

;
}

module.exports = generateMarkdown;
