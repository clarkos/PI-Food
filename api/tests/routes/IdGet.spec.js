/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  name: "Milanea a la napolitana",
  summary: "summary",
};

describe("GET /recipes/:id/", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );

  it("should return properties of recipe with such id", () =>
    agent.get("/recipes/3").then((res) => {
      expect(res.body).to.have.all.keys( "name","id","score","image","diets", "summary", "healthScore", "steps", "dishTypes"); //prettier-ignore
    }));
  it("should return message if theres no recipe with such id (API)", () =>
    agent.get("/recipes/82304982730498273").then((res) => {
      expect(res.body).to.deep.equal({
        message: "error finding with id",
      });
    }));
  it("should return message if theres no recipe with such id (DB)", () =>
    agent.get("/recipes/3b383fae-e738-11eb-ba80-0242ac130004").then((res) => {
      expect(res.body).to.deep.equal({
        message: "error finding with id",
      });
    }));
});
