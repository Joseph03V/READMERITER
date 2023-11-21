// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project."
    },
    {
        type: 'input',
        name: 'instalation',
        message: "What steps do you take to install this project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use this project?"
    },
    {
        type: 'input',
        name: 'futureImplementations',
        message: "What feaures do you plan on implementing in the future?"
    },
    {
        type: 'input',
        name: 'license',
        message: "which license did you use?"
    },
    {
        type: 'input',
        name: 'githubUser',
        message: "Enter your github username: "
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'screenshot',
        message: "Its imortant to add a RELATIVE path to a live screenshot of your application: "
    },
    {
        type: 'input',
        name: 'link',
        message: "Please include the appication url: "
    }
]);
};

// TODO: Create a function to write README file
const generateReadMe = ({title,description,instalation,usage,futureImplementations,license,githubUser,email,screenshot,link}) =>
`# ${title}

## licence
${license}
![NPM](https://img.shields.io/npm/l/react?logo=npm&logoColor=purple&labelColor=white&color=purple)

## Description
${description}

# Table of Contents
-Instalation \\
-Usage \\
-Future Implementations \\
-Contact For Questions \\
-Live Screenshot \\
-Link to Application \\


## Instalation
${instalation}

## Usage
${usage}

## future Implementations
${futureImplementations}

## Contact For Questions
${githubUser}
${email}

## Live Screenshot
![Alt text](<${screenshot}>)

## Link to Application
[a link] (${link}) `;

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully created your ReadMe!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
