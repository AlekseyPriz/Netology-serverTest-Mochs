'use strict';

const expect = require('chai').expect;
const supertest = require('supertest');

var server = supertest.agent("http://localhost:3000");
require('../RestServer');

describe('Тесты на веб-сервер ', () => {

  describe('Тесты на получение пользователей по REST протоколу', () => {
    it("Получаем исходных пользователей", function(done) {
      server
        .get("/v1/users")
        .end(function(error, response) {
          expect(response.status).to.equal(200);
          expect(response.body).to.eql([
            { name: 'Vasiliy', score: 3 },
            { name: 'Pavel', score: 15 },
            { name: 'Semen', score: 0 }
          ]);
          done();
        });
    });
  });

  describe('Тесты на создание пользователя по REST протоколу', () => {
    it("Создаем пользователя", function(done) {
      server
        .post("/v1/users")
        .type('application/x-www-form-urlencoded')
        .send({
          "name" : "Roman",
          "score" : 100
        })
        .expect("Content-type", /json/)
        .expect(200)
        .end(function(error, response) {
          expect(response.status).to.equal(200);
          expect(response.body).to.eql([
            { name: 'Vasiliy', score: 3 },
            { name: 'Pavel', score: 15 },
            { name: 'Semen', score: 0 },
            {name: 'Roman', score: "100" }
          ]);
          done();
        });
    });
  });

  describe('Тесты на удаление пользователя по REST протоколу', () => {

    it('Удаляем пользователя', (done) => {
      server
        .del("/v1/users/4") // удаляем пользователя "Roman" созданного в предыдущем describe
        .end(function(error, response) {
          expect(response.body).to.eql([
            { name: 'Vasiliy', score: 3 },
            { name: 'Pavel', score: 15 },
            { name: 'Semen', score: 0 },
          ]);
          done();
        });
    });
  });
});

