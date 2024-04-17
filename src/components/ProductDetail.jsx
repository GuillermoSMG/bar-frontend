import { useParams } from 'react-router-dom';
import { useProductsStore } from '../store/products';
import { useEffect } from 'react';
export const ProductDetail = () => {
	const { productId } = useParams();
	const { productFiltered, filterId } = useProductsStore();
	useEffect(() => {
		filterId(Number(productId));
	}, [productId, filterId]);
	console.log(productFiltered);
	return (
		<div>
			<p>h</p>
		</div>
	);
};
