// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let chosenLicense = ''
  if(licenseType === MIT) {
    chosenLicense =  `![license: MIT](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else if (licenseType === GPLv3) {
    chosenLicense = `![license: GPLv3](https://img.shields.io/badge/license-${license}-yellow.svg)`
  } else if(licenseType === Apache) {
    chosenLicense = `![license: Apache 2.0](https://img.shields.io/badge/license-${license}-green.svg)`

  }
}
// https://img.shields.io/badge/license-${license}-blue.svg


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 switch(license) {
   case "MIT":
    return "https://opensourse.org/licenses/MIT";
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
      case "Apache 2.0":
       return "https://www.apache.org/liceses/LICENSE-2.0";
       defaul:
       return "";
 }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  ${data.description}
  ## Table Of Contents
  ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ${renderLicenseBadge(license)}
  ## Tests
  ${data.test}

`;
}

module.exports = generateMarkdown;
