const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  describe("Constructor function", () => {
    it("should create an object with a name, id, email, and school if provided valid arguments", () => {
      const intern = new Intern("Jane", "001", "jane@nowhere.com", "mit");

      expect(intern.name).toEqual("Jane");
      expect(intern.id).toEqual("001");
      expect(intern.email).toEqual("jane@nowhere.com");
      expect(intern.school).toEqual("mit");
    });
  });

  describe("getRole function", () => {
    it("should return role", () => {
      expect(
        new Intern("Jane", "001", "jane@nowhere.com", "mit").getRole()
      ).toBe("Intern");
    });
  });

  describe("getSchool function", () => {
    it("should return school", () => {
      expect(
        new Intern("Jane", "001", "jane@nowhere.com", "mit").getSchool()
      ).toBe("mit");
    });
  });
});
