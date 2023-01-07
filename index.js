// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Please provide a brief description of what it does...',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your github info?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'Tell me how your project is used',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'What licenses will be used?',
        name: 'license',
        choices: ['IBM', 'MIT', 'ISC', 'Mozilla']
    },
    {
        type: 'input',
        message: 'Who else contributed to this project?(use commas, and spaces)',
        name: 'contributors'
    },
    {
        type: 'checkbox',
        message: 'Please provide the tests that were ran',
        name: 'tests',
        choices: ['Ant', 'Go', 'Gradle', '.NET', 'Node.js']
    },
    
];

const generateReadMe = ({projectName, description, contents, installationInstructions, usage, license, contributors, tests, github, email}) => 
   

    `
    #title: ${projectName}:
    
    ##Notice!
    this application is covered under the license ${license}

    
    ##Table of Contents
        [Descritpion](#description)
        [Installation](#installation)
        [Usage](#usage)
        [Contributing](#contributing)
        [Tests](#tests)
        [Additional Questions](#questions)


    <a name = 'description' />
    ###Descritpion
    ${description}


    <a name = 'installation' />
    ###Installation
    ${installationInstructions}


    <a name = 'usage' />
    ### Usage
    ${usage}


    <a name = 'contributing' />
    ### Contributing
    ${contributors}


    <a name = 'tests' />
    ###Tests
    ${tests}


    <a name = 'questions' />
    ###Additional questions:
    message me at:
    ${github}
    ${email}

    `;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.log(err) : console.log("Your README fiile has been created!!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
        ...questions        
    ])
    .then((answers)=> {
        const readMeContent = generateReadMe(answers)
        writeToFile('README.md', readMeContent)
    });
}

// Function call to initialize app
init();





