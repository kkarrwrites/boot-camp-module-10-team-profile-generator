const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  describe("Constructor function", () => {
    it("should create an object with a name, id, email, and github if provided valid arguments", () => {
      const engineer = new Engineer(
        "Jane",
        "001",
        "jane@nowhere.com",
        "jane_engineer"
      );

      expect(engineer.name).toEqual("Jane");
      expect(engineer.id).toEqual("001");
      expect(engineer.email).toEqual("jane@nowhere.com");
      expect(engineer.github).toEqual("jane_engineer");
    });
  });

  describe("getRole function", () => {
    it("should return role", () => {
      expect(
        new Engineer(
          "Jane",
          "001",
          "jane@nowhere.com",
          "jane_engineer"
        ).getRole()
      ).toBe("Engineer");
    });
  });

  describe("getGithub function", () => {
    it("should return github", () => {
      expect(
        new Engineer(
          "Jane",
          "001",
          "jane@nowhere.com",
          "jane_engineer"
        ).getGithub()
      ).toBe("jane_engineer");
    });
  });
});
