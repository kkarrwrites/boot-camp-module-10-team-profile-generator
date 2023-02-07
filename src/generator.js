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

class Generator {
  init() {
    this.askManagerInformation();
  }

  askManagerInformation() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      this.menu();
    });
  }

  menu() {
    inquirer.prompt(menuQuestions).then((answers) => {
      if (answers.choice === "Engineer") {
        console.log("Engineer");
      } else if (answers.choice === "Intern") {
        console.log("Intern");
      } else if (answers.choice === "Finish") {
        console.log("Finish");
      }
    });
  }
}

module.exports = Generator;
