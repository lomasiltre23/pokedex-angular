import { inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { PokemonService } from "../services/pokemon.service";
import * as actions from '../store/actions'
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PokemonsEffects {
    private actions = inject(Actions)
    private pokemonService = inject(PokemonService);

    loadAllPokemons = createEffect(() => this.actions.pipe(
        ofType(actions.getAllPokemons),
        exhaustMap(() => of([{name: '', type: ''}]).pipe(
            map((pokemons) => actions.getAllPokemonsSuccess({pokemons})),
            catchError(() => of(actions.getAllPokemonsError({errorMsg: 1})))
        ))
    ));
}