import { create } from 'zustand';
import { useGetData } from '../hooks/useGetData';
import { API_URL } from '../consts/urls';
import { persist } from 'zustand/middleware';

export const useProductsStore = create()(
	persist(
		(set, get) => {
			return {
				products: [],
				loading: false,
				productFiltered: [],

				FetchProducts: async () => {
					set({ loading: true });
					const products = await useGetData(API_URL);
					set({ products, loading: false });
				},
				filterId: id => {
					const { products } = get();
					const productFiltered = products.filter(prod => prod.id === id);
					set({ productFiltered, loading: false });
				},
			};
		},
		{ name: 'products' }
	)
);
