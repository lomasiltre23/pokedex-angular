import {createReducer, on} from '@ngrx/store';
import { Pokemon } from './state';
import * as actions from './actions'

export const initialState: Pokemon[] = [];

export const pokemonReducer = createReducer(
    initialState,

    on(actions.getAllPokemons, (state: Pokemon[]) => state),

    on(actions.getAllPokemonsSuccess, (state, { pokemons }) => {
        console.log('simon');
        return pokemons
    }),
)