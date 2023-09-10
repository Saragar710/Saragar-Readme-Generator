// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none") {
     return `![license: MIT](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
  // let licenseType = license.license;
  // let chosenLicense = ''
  // if(licenseType === MIT) {
  //   chosenLicense =  `![license: MIT](https://img.shields.io/badge/license-${license}-blue.svg)`
  // } else if (licenseType === GPLv3) {
  //   chosenLicense = `![license: GPLv3](https://img.shields.io/badge/license-${license}-yellow.svg)`
  // } else if(licenseType === Apache) {
  //   chosenLicense = `![license: Apache 2.0](https://img.shields.io/badge/license-${license}-green.svg)`

  // }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none") {
    return `- [Credits](#credits)`;
  }
  return ''
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = license.license;
  if (license !== "none") {
    return`-[license](#license)`;
  // } else if (license === "GPLv3") {
  //   return "The GNU General Public License (GPL)";
  // } else if(license === "Apache 2.0") {
  //   return "The Apache 2.0 License";{
  //   } 
   }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description
  ${data.description}

  ## Table Of Contents
  ${data.tableOfContents}
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
${renderLicenseLink(data.license)}

  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}
  ${data.license}



  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.test}
  
  ## Questions
  ${data.name}
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
// module.exports = returnLicenseSection;
