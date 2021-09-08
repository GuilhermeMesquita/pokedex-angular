import { PokemonService } from './../../_services/pokemon.service';
import { Component } from '@angular/core';
import { Pokemon } from 'src/_model/Pokemon';
import { Type } from 'src/_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [{
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    number: 1,
    name: "Bulbasaur",
    types: [Type.Grass, Type.Poison]
  }];

  constructor(
    public _pokemonService: PokemonService
  ) {

  }
}
