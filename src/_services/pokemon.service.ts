import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, ReplaySubject } from 'rxjs';
import { Pokemon } from '../_model/Pokemon';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor(
    private _httpClient: HttpClient
  ) {
    const allPokemonsURL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

    this._httpClient.get<any>(allPokemonsURL).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this._httpClient.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map(t => t.type.name),
    });
  }
}
