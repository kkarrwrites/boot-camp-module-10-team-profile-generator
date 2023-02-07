const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
  describe("Constructor function", () => {
    it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
      const manager = new Manager("Jane", "001", "jane@nowhere.com", "5");

      expect(manager.name).toEqual("Jane");
      expect(manager.id).toEqual("001");
      expect(manager.email).toEqual("jane@nowhere.com");
      expect(manager.officeNumber).toEqual("5");
    });
  });

  describe("getRole function", () => {
    it("should return role", () => {
      expect(
        new Manager("Jane", "001", "jane@nowhere.com", "5").getRole()
      ).toBe("Manager");
    });
  });

  describe("getOfficeNumber function", () => {
    it("should return officeNumber", () => {
      expect(
        new Manager("Jane", "001", "jane@nowhere.com", "5").getOfficeNumber()
      ).toBe("5");
    });
  });
});
