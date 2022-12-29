const { Recipe } = require("../../src/db.js");
const { expect } = require("chai");

describe("Recipe Model", function () {
  let RecipeTest;
  beforeEach(async function () {
    await Recipe.sync({ force: true });
    RecipeTest = await Recipe.create({ name: "test", summary: "summary" });
  });

  it("throws error if a name isnt provided", (done) => {
    Recipe.create({
      summary: "test",
    })
      .then(() => done(new Error("It shouldnt be created")))
      .catch(() => done());
  });
  it("throws error if a summary isnt provided", (done) => {
    Recipe.create({
      name: "test",
    })
      .then(() => done(new Error("It shouldnt be created")))
      .catch(() => done());
  });

  it("throws an error if score isnt between 0-100", (done) => {
    Recipe.create({
      name: "test name",
      summary: "test summary",
      score: 200,
    })
      .then(() => done(new Error("It shouldnt be created")))
      .catch((err) => {
        expect(err["name"]).to.be.equal("SequelizeValidationError");
        done();
      });
  });
  it("generates an id", () => {
    expect(RecipeTest.id).to.exist;
  });
});
