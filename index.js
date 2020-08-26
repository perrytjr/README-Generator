// array of questions for user
inquirer
  .prompt([
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTittle"
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
            message: "Provide test instructions.",
            name: "testsInstructions"
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
