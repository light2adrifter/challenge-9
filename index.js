// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'gitHub',
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
        name: 'install'
    },

    {
        type:'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'Provide guidelines on how to contriubute.',
        name: 'contributes'
    },

    {
        type:'input',
        message:'Provide tests writtten for your application if any.',
        name: 'contribute'
    },

    {
        type: 'list',
        message: 'Select a license for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'ISC', 'AFL']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err){
            return console.log(err);
        }
        console.log('Your README.md has succesfully been crated!')
    });
};

// TODO: Create a function to initialize app
function init() {
    userResponse = inquirer.prompt(questions);
}

// Function call to initialize app
init();
