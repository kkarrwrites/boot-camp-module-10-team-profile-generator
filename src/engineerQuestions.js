module.exports = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the engineer's name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's employee ID?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the engineer's employee ID.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email address?",
    validate: (input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input)) {
        return true;
      } else {
        console.log("Please enter the engineer's email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub user name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the engineer's GitHub user name.");
        return false;
      }
    },
  },
];
