const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = []

function init() {
    managerQuestions();
}

init();

function managerQuestions(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        }
    ]).then(function(result){
        const newManager = new Manager(result.name,result.id,result.email,result.github);
        console.log(newManager);
        employeeArr.push(newManager);
        addEmployee();
    })
}

function addEmployee(){
    inquirer.prompt({
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Done adding employees"]
    }).then(function(result){
        if(result.employeeType === "Engineer"){
            engineerQuestions();
        } else if (result.employeeType==="Intern"){
            internQuestions();
        } else if (result.employeeType==="Done adding employees"){
            generateHTML();
        }
    })
}

// add engineer
function engineerQuestions(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
        type: "input",
        name: "github",
        message: "What is your github username?"
        }
]).then(function(result){
    const newEngineer = new Engineer(result.name,result.id,result.email,result.github);
    console.log(newEngineer);
    employeeArr.push(newEngineer);
    addEmployee();
})
}

// add intern 
function internQuestions(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your school name?"
        }
]).then(function(result){
    const newIntern = new Intern(result.name,result.id,result.email,result.school);
    console.log(newIntern);
    employeeArr.push(newIntern);
    addEmployee();
})
}

// generate HTML

function generateHTML(){
    const htmlString = render(employeeArr);
    fs.writeFile(outputPath,htmlString,(err,data)=>{
        if(err){
            throw err;
        }
    })
};

//ask initial name, id, email prompt questions to create employee object

// ask school name if intern

// ask office number if manager

// ask github info if engineer


// TODO: After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// TODO: After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
