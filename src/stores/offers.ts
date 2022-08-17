import type { ICategories } from '../../interfaces/ICategories';
import type { IOffers } from '../../interfaces/IOffers';
import { defineStore } from 'pinia';

interface IOffersStore {
  offers: IOffers[];
  categories: ICategories[];
}

export const useOffersStore = defineStore({
  id: 'offers',
  state: () =>
    ({
      offers: [],
      categories: [],
    } as IOffersStore),
  actions: {},
});
