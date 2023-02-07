const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Constructor function", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Jane", "001", "jane@nowhere.com");

      expect(employee.name).toEqual("Jane");
      expect(employee.id).toEqual("001");
      expect(employee.email).toEqual("jane@nowhere.com");
    });
  });

  describe("getName function", () => {
    it("should return name", () => {
      expect(new Employee("Jane", "001", "jane@nowhere.com").getName()).toBe(
        "Jane"
      );
    });
  });

  describe("getId function", () => {
    it("should return id", () => {
      expect(new Employee("Jane", "001", "jane@nowhere.com").getId()).toBe(
        "001"
      );
    });
  });

  describe("getEmail function", () => {
    it("should return email", () => {
      expect(new Employee("Jane", "001", "jane@nowhere.com").getEmail()).toBe(
        "jane@nowhere.com"
      );
    });
  });

  describe("getRole function", () => {
    it("should return role", () => {
      expect(new Employee("Jane", "001", "jane@nowhere.com").getRole()).toBe(
        "Employee"
      );
    });
  });
});
