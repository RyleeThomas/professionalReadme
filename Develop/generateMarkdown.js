// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  My Github username is ${data.userName} , if you would like to visit my GitHub page the link is: ${data.githubLink}
  For further quesitons please reach out via email: ${data.email}

`;
}

module.exports = generateMarkdown;
