import { useProductsStore } from '../store/products';

export function HomePage() {
	const { products, loading } = useProductsStore(state => state);
	return (
		<ul>
			{loading ? (
				<>Loading...</>
			) : (
				products?.map(data => <li key={data.id}>{data.name}</li>)
			)}
		</ul>
	);
}
