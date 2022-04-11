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
const generateMarkdown = (data) => {
  return `# ${data.title}

## Description
### ${data.description}
  
## Table of Contents
1. [Applications](#Features)
2. [Features](#Features)
3. [Installation](#installation)
4. [Credits](#credits)
5. [Learning](#learning)
6. [Contact](#email)



## Usage and Applications
### ${data.usage} ${data.problem}

<p>&nbsp;</p>  

## Features
### ${data.features}  

<p>&nbsp;</p>

## Installation
### ${data.installation}

<p>&nbsp;</p>
  
## Credits
### ${data.credits}

<p>&nbsp;</p>
  
## Learning
### ${data.learn}

<p>&nbsp;</p>
  
## GitHub User Name
### ${data.github}

<p>&nbsp;</p>
  
## Email
### ${data.email}

  `;
};

module.exports = generateMarkdown;
