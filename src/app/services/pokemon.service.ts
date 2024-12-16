import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../store/state';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly http: HttpClient = inject(HttpClient);

  getAllPokemons(): Observable<Pokemon> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon').pipe(map((data: any) => data.results));
  }
}
