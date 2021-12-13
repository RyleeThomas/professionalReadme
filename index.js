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
        message: 'Provide instructions for use (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter instructions for use!');
              return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps required to install your project (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please the steps required to install your project!');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Add guidelines for how other developers can contribute to it (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter guidelines for how other developers can contribute to it!');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide examples on how to run test for your application (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter examples on how to run test!');
              return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmTestImage',
        message: 'Would you like to add an image reference?',
        default: true
    },

    {
        type: 'input',
        name: 'testImage',
        message: 'Provide path to image in folder: ',
        when: ({ confirmTestImage }) => {
            if (confirmTestImage) {
              return true;
            } else {
              return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What liscense badge did you want for this project?',
        choices: ['GNU_AGPLv3','GNU_GPLv3','GNU_LGPLv3','Mozilla_Publis_Liscense_2.0',
    'Apache_License_2.0', 'MIT_License', 'Boost_Software_License_1.0', 'The_Unlicense']
    },

    {
        type: 'input',
        name: 'userName',
        message: 'Enter your Github username (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Github username!');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter the link to your GitHub (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the link to your GitHub!');
              return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter an Email for contact (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter an Email for contact!');
              return false;
            }
        }
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
