import { useParams } from 'react-router-dom';
import { useFilter } from '../hooks/useFilter';

export const ProductsContainer = () => {
	const { category } = useParams();
	const filteredProds = useFilter(category);
	return (
		<ul>
			{filteredProds?.map(data => (
				<li key={data.id}>
					<h3>{data.name}</h3>
				</li>
			))}
		</ul>
	);
};
