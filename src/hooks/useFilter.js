import { useProductsStore } from '../store/products';

export const useFilter = category => {
	const { products } = useProductsStore(state => state);
	return products.filter(prod => prod.category === category);
};

export const useFilterId = id => {
	const { products } = useProductsStore(state => state);
	return products.filter(prod => prod.id === id);
};
