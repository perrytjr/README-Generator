var inquirer = require("inquirer");
var fs = require('fs');
const util = require('util');



const thenableWriteFile = util.promisify(fs.writeFile);




function getReadmeOutput(answers) {
    const projectTitle = answers.projectTitle;
    const projectDescription = answers.projectDescription;
    const instalationInstructions = answers.instalationInstructions;
    const usageInformation = answers.usageInformation;
    const contributionGuidelines = answers.contributionGuidlines;
    const testInstructions = answers.testInstructions;
    const licenseName = answers.licenseName;
    const userName = answers.userName;
    const emailAddress = answers.emailAddress;

    console.log(answers);

    return (`
# ${projectTitle}
## Description
${projectDescription}
## Table of Contents
[Instalation] (##instalation)
[Information] (##information)
[Contribution] (##contribution)
[Test] (##test)
[License] (##license)
[Questions] (##questions)


## Instalation
${instalationInstructions}
## Usage Information
${usageInformation}
## Contributing
${contributionGuidelines}
## Test
${testInstructions}
## License
${licenseName}
## Questions
Please contact me either thought GitHub or directly to my personal email address bellow:
[GitHub](http://github.com/${userName}) 
Email : ${emailAddress}
    
    `)

    


}
// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Description of your application.",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "installationInstructions"
        },

        {
            type: "input",
            message: "Provide information for usage.",
            name: "usageInformation"
        },
        {
            type: "input",
            message: "Provide Contribution Guidelines.",
            name: "contributionGuidelines"
        },
        {
            type: "input",
            message: "Provide test instructions.",
            name: "testInstructions"
        },
        {
            type: "list",
            message: "Which license did you use? ",
            choices: ['MIT', 'GNU',],
            name: "licenseName"
        },

        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "userName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "emailAddress"
        }

    ])

    .then(function (answers) {
        return getReadmeOutput(answers);
    })
    .then(function(readmeOutput){
        return thenableWriteFile("README.md", readmeOutput);
    })
    .then(function () {
        console.log('All done!');
    })
    .catch(function (error) {
        console.log('Oh noes! An error!', error);
    });
    


// function to write README file
//function writeToFile(fileName, data) {
////}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
