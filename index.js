//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { userInfo } = require('os');

//Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userName',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('A Github username is required!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: input => {
            if (input) {
                return true;
            }else{
                console.log('Email is required!')
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'what is your GitHub repos name?',
        name: 'repo',
        validate: input => {
            if (input) {
                return true;
            }else{
                console.log('A Github repo name is required!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project title name',
        validate: input => {
            if (input) {
                return true;
            }else{
                console.log('A project title is required!');
            }
        }
    },

    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
        default: 'Project description',
        validate: input => {
            if (input) {
                return true;
            }else{
                console.log('A project description is required!');
            }
        }
},

    {
        type:'input',
        message: 'Steps required to install your project.',
        name: 'install',
        default: 'npm install'
    },

    {
        type:'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'Provide guidelines on how to contriubute.',
        name: 'contribution'
    },

    {
        type:'input',
        message:'Provide tests writtten for your application if any.',
        name: 'tests',
        default: 'N/A'
    },

    {
        type: 'confrim',
        name: 'confirmlicense',
        message: 'Would you like to enter a liceense?',
        default: true
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['MIT', 'Apache', 'ISC', 'AFL'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            }else {
                return false;
            }
        }
    }
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err){
            return console.log(err);
        }
        console.log('Your README.md has succesfully been crated!')
    });
};

const writeFileAsync = (writeToFile)

//Function to initialize app
async function init() {
    userResponse = await inquirer.prompt(questions);
    generateContent = generateMarkdown(userResponse);
    
    // Writes markdown file
    writeFileAsync('./dist/README.md', generateContent);
}

// Function call to initialize app
init();
