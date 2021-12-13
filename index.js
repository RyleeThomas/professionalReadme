// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./Develop/generateMarkDown');

// TODO: Create an array of questions for user input
const promptUser = readmeData => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: nameInput => {
            if (nameInput) {
                return true;
        
            } else {
          
            console.log('Please enter your project title!');
            return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a detailed description of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use'
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps required to install your project'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for how other developers can contribute to it'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to run test for your application'
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What liscense badge did you want for this project?',
        choices: ['x','x']
    },

    {
        type: 'input',
        name: 'userName',
        message: 'Enter your Github username'
    },

    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter the link to your GitHub'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter an Email for contact'
    },

  ]);
};

// Function call to initialize app
promptUser()
  .then(portfolioData => {
    const pageMD = generatePage(portfolioData);

    fs.writeFile('./README.md', pageMD, err => {
        if (err) throw err;

        console.log('ReadMe file complete, check the ReadMe.md !');
    });
  });