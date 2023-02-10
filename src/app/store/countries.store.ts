import { ComponentStore } from '@ngrx/component-store';
import { Country } from '../core/entities';

export type CountriesStoreType = {
    countries: Country[],
    view: Country[]
}

export class CountriesStore extends ComponentStore<CountriesStoreType> {
    public view$ = this.select(state => state.view);
    public countries$ = this.select(state => state.countries);

    public updateView = this.updater((state, func: (state: CountriesStoreType) => Country[]) => {
        return {
            ...state,
            view: func(state)
        }
    });
}