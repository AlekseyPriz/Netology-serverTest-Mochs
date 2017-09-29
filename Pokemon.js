'use strict';

  class Pokemon {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
    show() {
      let returnText = `Hi! My name is ${this.name}, my level is ${this.level}`;
      //console.log(returnText);
      return returnText;
    }
    valueOf(){
      return this.level;
    }
  }


  class Pokemonlist extends Array{
    constructor(...items){
      items = items.filter(
        item => item instanceof Pokemon
      );
      super(...items);
    }
    add(name,level){
      let newPokemon = new Pokemon(name,level);
      this.push(newPokemon);
    }
    show(){
      this.forEach(function(item){
        item.show();
      });
      let returnText = `There are ${this.length} pokemons here.`;
      //console.log(returnText);
      return returnText;
    }
    max(){
      let strongestPokemon = Math.max(...this);
      return this.find(
        item => item.level==strongestPokemon
      );
    }
  }


module.exports.pokemon = Pokemon;
module.exports.pokemonlist = Pokemonlist;

