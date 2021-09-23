// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseInput = data.license
  if (licenseInput == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseInput == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseInput == 'GNU General Public License (GPL) 2.0') {
    return  `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (licenseInput == 'GNU General Public License (GPL) 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  if (data.license === 'None') {
    return '';
  } else
  return `
  * [License](#license)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) { 
  if (data.license === 'None') {
    return '';
  } else
  return `
   ## License
   This project uses the ${data.license} open-source license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${renderLicenseBadge(data)} 
  # ${data.title} 
  
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data)}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributors}

  ${renderLicenseSection(data)}

  ## Tests
  ${data.test}

`;
}


module.exports = generateMarkdown;
