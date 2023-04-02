// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your file name?',
        name: 'file_name',
    },
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'project_title',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'description_1'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'description_2'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'description_3'
    },
    { 
        type: 'input',
        message: 'What did you learn?',
        name: 'description_4'
    },
{
    type: 'input',
    message: 'What were the steps for installation?',
    name: 'installation'
},
{
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    name: 'usage'
},
{
    type: 'input',
    message: 'Provide steps for testing.',
    name: 'testing'
},
{
    type: 'list',
    message: 'Select the applicable License for your project:',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
},
{
    type: 'input',
    message: 'Enter GitHub username',
    name: 'github'
},
{
    type: 'input',
    message: 'Enter email address',
    name: 'email'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    readMe = `# ${response.project_title}

## Description

-Motivation for making the project? ${response.description_1}
-Why did you build this project? ${response.description_2}
-What problem does it solve? ${response.description_3}
-What did you learn? ${response.description_4}

## Installation

What were the steps for installation? ${response.installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed. ${response.usage}

## Testing

Provide any steps used for testing ${response.testing}

## License

${response.license}

## Questions

${response.github}
${response.email}
`
    fs.writeFile(fileName, readMe, (err) =>
    err ? console.error(err) : console.log('Success!'));
}


// TODO: Create a function to initialize app
function init() {
    // let response = JSON.parse('{"file_name": "README.md", "project_title": "ReadMe-Generator", "description_1": "I wanted to make a readme generator", "description_2": "to practice my javascript / node skills", "description_3": "creating a readme in a speedy way", "description_4": "how to use node, inquirer, and stuff", "installation": "had to install inquirer with npms", "usage": "n/a", "testing": "n/a", "license": "MIT", "github": "kathrynstack", "email": "kathrynstack17@gmail.com"}');
    // writeToFile(response.file_name, response);
    inquirer.prompt(questions).then((response) => writeToFile(response.file_name, response));
}
// Function call to initialize app
init();
