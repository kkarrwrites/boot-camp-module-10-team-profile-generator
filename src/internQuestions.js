module.exports = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the intern's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's employee ID?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the intern's employee ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email address?",
    validate: (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input)) {
        return true;
      } else {
        console.log("Please enter the intern's email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the intern's school.");
        return false;
      }
    },
  },
];
