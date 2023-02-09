module.exports = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the manager's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's employee ID?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the manager's employee ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email address?",
    validate: (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input)) {
        return true;
      } else {
        console.log("Please enter the manager's email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the manager's office number.");
        return false;
      }
    },
  },
];
