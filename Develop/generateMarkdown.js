
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const generateLiscenseBadge = license => {
  if(!license){
    return '';
  }

  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}
// add license to table of contents
const addLicenseToTable = license => {
  if(!license){
    return '';
  }

  return `
   * [License](#License)
  `;
}

const addLicenseDescription = license => {
  if(!license){
    return '';
  }

  return `
  ## Liscense
  This application is covered under the ${license}.
  For more information regarding the license permissions, conditions, and limitations please
  visit [chooselicense.com](https://choosealicense.com/licenses/)
  `;
}
// adding a images/video to the testing area
const addImageTest = testImage => {
  if(!testImage){
    return '';
  }

  return `![Test Image Reference](.Develop/image/${testImage})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${generateLiscenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#Usage)
  ${addLicenseToTable(data.license)}
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ${addLicenseDescription(data.license)}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}
  ${addImageTest(data.testImage)}

  ## Questions
  My Github username is ${data.userName} , if you would like to visit my GitHub page the link is: ${data.githubLink}
  For further quesitons please reach out via email: ${data.email}

`;
}

module.exports = generateMarkdown;
