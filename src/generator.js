const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const managerQuestions = require("./managerQuestions");
const engineerQuestions = require("./engineerQuestions");
const internQuestions = require("./internQuestions");
const menuQuestions = require("./menuQuestions");

const team = [];

const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");
class Generator {
  init() {
    this.askManagerInformation();
  }

  askManagerInformation() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      this.menu();
    });
  }

  menu() {
    inquirer.prompt(menuQuestions).then((answers) => {
      if (answers.menu === "Engineer") {
        this.askEngineerInformation();
      } else if (answers.menu === "Intern") {
        this.askInternInformation();
      } else if (answers.menu === "Finish") {
        this.generateHTML();
      }
    });
  }

  askEngineerInformation() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      this.menu();
    });
  }

  askInternInformation() {
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      this.menu();
    });
  }

  generateHTML() {
    console.log(team);
    const cards = [];
    for (let i = 0; i < team.length; i++) {
      const employee = team[i];
      const role = employee.getRole();
      console.log(role);
      if (role === "Manager") {
        const managerCard = generateManager(employee);
        console.log(managerCard);
        cards.push(managerCard);
      } else if (role === "Engineer") {
        const engineerCard = generateEngineer(employee);
        console.log(engineerCard);
        cards.push(engineerCard);
      } else if (role === "Intern") {
        const internCard = generateIntern(employee);
        console.log(internCard);
        cards.push(internCard);
      }
    }
    console.log(cards);
    const cardsHTML = cards.join("");
    const completeHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <section>
      <div class="cards-container">
        ${cardsHTML}
      </div>
    </section>
  </body>
</html>`;
    fs.appendFile("./dist/index.html", completeHTML, (error) =>
      error ? console.error(error) : console.log("index.html created.")
    );
  }
}

module.exports = Generator;
