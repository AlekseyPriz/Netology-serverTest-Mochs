'use strict';

const expect = require('chai').expect;

const Pokemon = require('../Pokemon.js').pokemon;
const Pokemonlist = require('../Pokemon.js').pokemonlist;


describe('Тестируем методы add, show, max классов Pokemon Pokemonlist', () => {

  describe('Тесты на метод show класса Pokemon', () => {
    let pikachu;

    before(() => {
      pikachu = new Pokemon('Pikachu', 1);
    });

    it('Имя покемона задано в строковом формате', () => {
      expect(typeof pikachu.name).to.equal('string');
    });

    it('Уровень покемона задан в числовом формате', () => {
      expect(typeof pikachu.level).to.equal('number');
    });

    it('Вернет заданное имя покемона', () => {
      expect(pikachu.name).to.equal('Pikachu');
    });

    it('Вернет заданный уровень покемона', () => {
      expect(pikachu.level).to.equal(1);
    });

    it('Вернет заданный объект', () => {
      expect(pikachu).to.eql( { name: 'Pikachu', level: 1 });
    });

    it('Вернет заданный правильный текст сообщения', () => {

      let showFunctionsText = pikachu.show();

      expect(showFunctionsText).to.equal('Hi! My name is Pikachu, my level is 1');
    });

  });

  describe('Тесты на метод add класса PokemonList', () => {
    let arr;

    before(() => {
      arr = new Pokemonlist();
      arr.add('newPokemonName', 80);
    });

    it('Имя покемона задано в строковом формате', () => {
      expect(typeof arr[0].name).to.equal('string');
    });

    it('Уровень покемона задан в числовом формате', () => {
      expect(typeof arr[0].level).to.equal('number');
    });

    it('Вернет имя покемона', () => {
      expect(arr[0].name).to.equal('newPokemonName');
    });

    it('Вернет заданный уровень покемона', () => {
      expect(arr[0].level).to.equal(80);
    });

    it('Вернет заданный объект', () => {
      expect(arr[0]).to.eql( { name: 'newPokemonName', level: 80 });
    });

  });

  describe('Тесты на метод show класса PokemonList', () => {
    let addArr;

    before(() => {
      addArr = new Pokemonlist();
      addArr.add('newPok', 80);
      addArr.add('newPokemon', 10);

    });

    it('Функция выводит правильное количество покемонов в списке', () => {
      let showFunctionsText = addArr.show();

      expect(showFunctionsText).to.equal('There are 2 pokemons here.');
    });

    it('Имя покемона задано в строковом формате', () => {
      expect(typeof addArr[0].name).to.equal('string');
    });

    it('Уровень покемона newPok задан в числовом формате', () => {
      expect(typeof addArr[0].level).to.equal('number');
    });

    it('Вернет имя покемона', () => {
      expect(addArr[0].name).to.equal('newPok');
    });

    it('Вернет заданный уровень покемона', () => {
      expect(addArr[0].level).to.equal(80);
    });

  });

  describe('Тесты на метод max класса PokemonList', () => {
    let maxArr;

    beforeEach(() => {
      maxArr = new Pokemonlist();

    });

    it('Выведет покемона с максимальным уровнем', () => {

      maxArr.add('newPokemonMin', 1);
      maxArr.add('newPokemonMind', 40);
      maxArr.add('newPokemonMax', 80);

      expect(maxArr.max()).to.eql({ name: 'newPokemonMax', level: 80 });
    });

    it('Выведет первого покемона добавленного в массив, при внесении покемонов ' +
      'одинакового уровня', () => {

      maxArr.add('b', 80);
      maxArr.add('c', 80);
      maxArr.add('a', 80);

      expect(maxArr.max()).to.eql({ name: 'b', level: 80 });
    });

    it('Выведет покемона с любмы уровнем, если он один в массике', () => {
      maxArr.add('minus', -100);
      expect(maxArr.max()).to.eql({ name: 'minus', level: -100 });
    });

  });

});

