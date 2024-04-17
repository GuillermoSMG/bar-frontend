import { useProductsStore } from '../store/products';

export const useFilter = filter => {
	const { products } = useProductsStore(state => state);
	return products.filter(prod => prod.category === filter);
};
