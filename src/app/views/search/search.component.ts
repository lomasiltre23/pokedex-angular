import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPokemons } from '../../store/selectors';
import * as actions from '../../store/actions'

@Component({
  selector: 'app-search',
  imports: [],
  providers: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  private readonly store = inject(Store);

  pokemons = this.store.select(selectPokemons);

  ngOnInit(): void {
    this.pokemons.subscribe(data => {
      console.log(data);
    });

    this.store.dispatch(actions.getAllPokemons());
  }
}
