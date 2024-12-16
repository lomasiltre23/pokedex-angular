import { createSelector } from "@ngrx/store";
import { Pokemon } from "./state";

export const stateData = (state: Pokemon) => state;

export const selectPokemons = createSelector(stateData, (state: Pokemon) => state);