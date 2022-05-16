// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdownGenerator = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Write the Title of your Project',
        valide: titleInput =>{
            if(titleInput){
                return true;
            }else{
                console.log('Please enter the title of your project');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write the project description',
        validate: descriptionInput =>{
            if (descriptionInput){
                return true;
            }else{
                console.log('Write a project description, please');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Steps to install the project',
        validate: installationInput =>{
            if(installationInput){
                return true;
            }else{
                console.log('Please provide installation steps');
                return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this for?',
        validate: usageInput =>{
            if (usageInput){
                return true;
            }else{
                console.log('Please provide the use for this project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseinput){
                return true;
            }else{
                console.log('Please select an option')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Credits to?',
        validate: collabooratorsInput =>{
            if(collabooratorsInput){
                return true;
            }else{
                console.log('Please add at least one collaborator');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'What technologies do you use?',
        choices:['None', 'Javascript','Node','CSS','HTML'],
        validate: badgesInput = () => {
            if(badgesInput){
                return true;     
            }else{
                console.log('Please select an option')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questionGithub',
        message: 'Introduce your github profile:',
        validate: questionsInput =>{
            if(questionsInput){
                return true;
            }else{
                console.log('Please add your contact information');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questionEmail',
        message: 'Introduce your email:',
        validate: questionsInput =>{
            if(questionsInput){
                return true;
            }else{
                console.log('Please add your contact information');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./DynamicREADME.md', fileContent, err =>{
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answer){
      console.log(answer);
      let fileContent = generateMarkdown(answer);
      writeToFile(fileContent)
  });
}

// Function call to initialize app
init();

module.exports = questions;