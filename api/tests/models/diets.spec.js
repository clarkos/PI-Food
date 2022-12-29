const { Diet, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Diet model", async () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  let dietTest;
  beforeEach(async function () {
    await Diet.sync({ force: true });
    dietTest = await Diet.create({ name: "test" });
  });
  it("throws an error if a name isnt provided", (done) => {
    Diet.create({})
      .then(() => done(new Error("it should be created")))
      .catch((err) => {
        expect(err["name"]).to.be.equal("SequelizeValidationError");
        done();
      });
  });
  it("generated an id", () => {
    expect(dietTest.ID).to.exist;
  });
});
