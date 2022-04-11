// TODO: Include packages needed for this application
var fs = require("fs");
const inquirer = require("inquirer");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a project title");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Describe the program you created",
      validate: (appInput) => {
        if (appInput) {
          return true;
        } else {
          console.log("Please describe the program you created");
          return false;
        }
      },
    },
    //Table of contents
    // 1 usage and application
    {
      type: "input",
      name: "usage",
      message: "What are the benefits from the use of this program?",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter a benefit of using the program");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "problem",
      message: "What problems does the application solve?",
      validate: (problemInput) => {
        if (problemInput) {
          return true;
        } else {
          console.log("Please enter a reason for the application");
          return false;
        }
      },
    },
    //2 Features
    {
      type: "input",
      name: "features",
      message: "What are the features of the application?",
      validate: (featureInput) => {
        if (featureInput) {
          return true;
        } else {
          console.log("Please enter a feature");
          return false;
        }
      },
    },   
    //3 Installation
    {
      type: "input",
      name: "installation",
      message: "Provide installation process?",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter the installation process");
          return false;
        }
      },
    },
    //4 collaboration and tools used
    {
      type: "input",
      name: "credits",
      message: "Provide collaborators and/or 3rd party assets that assisted?",
      validate: (creditsInput) => {
        if (creditsInput) {
          return true;
        } else {
          console.log("Provide any collaborators and/or 3rd party assets that assisted");
          return false;
        }
      },
    },
       //5 Learnings
    {
      type: "input",
      name: "learn",
      message: "What did you learn?",
      validate: (learnInput) => {
        if (learnInput) {
          return true;
        } else {
          console.log("Please enter something you learned");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github"
  },
  {
      type: "input",
      message: "What is your email address",
      name: "email"
  },
  ]);
  };

// TODO: Create a function to write README file
const writeFile = data => {
  fs.writeFile('README.md', data, err => {
    if (err) {
      console.log(err);
      return;
      } else {
        console.log("Good job you idiot")
    }
  })
};



questions()

.then(readme => {
    return generateMarkdown(readme);
})
.then(data => {
    return writeFile(data);
}) 
.catch(err => {
    console.log(err)
})

// init();

// function renderLicenseBadge(license) {}

// // Puts a link to the license
// const renderLicenseLink = (license) => {
//   if(!license) {
//     return '';
//   }
//   if(license === 'MIT License') {
//   return `
//   ### License Link
//   [MIT License](https://choosealicense.com/licenses/mit/)
//   `;
//   }
//   if(license === 'GNU GPLv3 License') {
//   return `
//   ### License Link
//   [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
//   `;
//   }
// }

// // Add the license text to the README from sean
// const renderLicenseSection = (license, name) => {
//   if(!license) {
//     return '';
//   }
//   if(license === 'MIT License') {
//   return `
//   ### License
//   MIT License
//   Copyright (c) 2021 ${name}
//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:
//   The above copyright notice and this permission notice shall be included in all
//   copies or substantial portions of the Software.
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.
//   `;
//   }
//   if(license === 'GNU GPLv3 License') {
//   return `
//   ### License
//   Copyright (C) <year>  <name of author>
//   This program is free software: you can redistribute it and/or modify
//   it under the terms of the GNU General Public License as published by
//   the Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//   This program is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
//   You should have received a copy of the GNU General Public License
//   along with this program.  If not, see <https://www.gnu.org/licenses/>.
//   `;
//   }
// }
