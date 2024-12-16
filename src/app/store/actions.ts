import { createAction, props } from "@ngrx/store";
import { Pokemon } from "./state";

export const getAllPokemons = createAction('[Search] Get All Pokemons');

export const getAllPokemonsSuccess = createAction('[Search] Get All Pokemons Success', props<{pokemons: Pokemon[]}>());

export const getAllPokemonsError = createAction('[Search] Get All Pokemons Error', props<{errorMsg: number}>());