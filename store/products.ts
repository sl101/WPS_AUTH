import {defineStore} from 'pinia'
//import api from '~/api';
import apiTemplate from '~/api/apiTemplate';
import type { Product } from '~/types';

const defaultValue: { products: Product[] } = {
  products:  [],
};

export const useProductsStore = defineStore('products',{
	state:()=> defaultValue,
	getters: {
		getAllProducts(): Product[] {
      return this.products;
    },
		getFavoritesProducts(): Product[]{
			return this.products.filter((product) => product.isFavorite);
		}
	},
	actions: {
		clear() {
      this.$patch({});
    },
    async setProducts() {
			this.products = await apiTemplate.getHomeData();
    },
		async setMemberProducts(){
			const resp = await apiTemplate.getFavorites();
			console.log("🚀 ~ setAuthProducts ~ resp:", resp)
			this.products = resp;
		},
		async toggleFavorite(input: string, action: string) {
		console.log("🚀 ~ toggleFavorite ~ action:", action)
		console.log("🚀 ~ input:", input)
		}
	}
})