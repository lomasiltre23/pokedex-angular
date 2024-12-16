import { Routes } from '@angular/router';
import { SearchComponent } from './views/search/search.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './store/effects';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path: '', 
        component: SearchComponent, 
        providers: [
            importProvidersFrom(StoreModule.forFeature('pokemons', pokemonReducer), EffectsModule.forFeature([PokemonsEffects])),
        ]
    }
];
