/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Diet } = require("../../src/db.js");

const agent = session(app);


describe('GET /types' , () => {

    beforeEach(() =>
    Diet.sync({ force: true }).then( () => Diet.create({name: 'fodmap friendly'}))
  );

  it('should return an array', () => 
  agent.get('/types')
  .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("array");
        // expect(Array.isArray(res.body)).to.be.true;
      }));
      it('should return both name and ID of recipe', () => 
      agent.get('/types')
      .then((res) => expect(res.body[0]).to.have.all.keys('name', 'ID'))
      )
})