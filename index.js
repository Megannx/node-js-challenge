// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
  },
  {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages do you know?',
      choices: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
  },
  {
      type: 'list',
      name: 'communication',
      message: 'What is your preferred method of communication?',
      choices: ['Email', 'Phone', 'Slack', 'In-person'],
  },
];

// Function to write user information to a README.md file
function writeToFile(fileName, data) {
    const { name, languages, communication } = data;

    const readmeContent = `
//# User Information

## Name
${name}

## Languages
${languages.join(', ')}

## Preferred Method of Communication
${communication}
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file created successfully!');
    });
}

// Function to initialize the application
function init() {
  inquirer
      .prompt(questions)
      .then((answers) => {
          writeToFile('README.md', answers); // Update the file name to 'README.md'
      })
      .catch((error) => {
          console.log(error);
      });
}

init();