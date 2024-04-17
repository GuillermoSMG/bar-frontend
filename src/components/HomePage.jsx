import { Link } from 'react-router-dom';
import { useProductsStore } from '../store/products';
import { nameNorm } from '../utils/nameNorm';

export function HomePage() {
	const { products, loading } = useProductsStore(state => state);
	return (
		<ul>
			{loading ? (
				<>Loading...</>
			) : (
				products?.map(data => (
					<li key={data.id}>
						<Link to={`/${data.category}/${nameNorm(data?.name)}/${data.id}`}>
							{data.name}
						</Link>
					</li>
				))
			)}
		</ul>
	);
}
