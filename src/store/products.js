import { create } from 'zustand';
import { useGetData } from '../hooks/useGetData';
import { API_URL } from '../consts/urls';

export const useProductsStore = create((set, get) => {
	return {
		products: [],
		loading: false,

		FetchProducts: async () => {
			set({ loading: true });
			const products = await useGetData(API_URL);
			set({ products, loading: false });
		},
	};
});
