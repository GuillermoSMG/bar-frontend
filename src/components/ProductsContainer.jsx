import { useParams } from 'react-router-dom';
import { API_URL } from '../consts/urls';
import { useGetData } from '../hooks/useGetData';

export const ProductsContainer = () => {
	const { category } = useParams();
	const data = useGetData(API_URL);
	const dataFiltered = data?.filter(d => d.category === category);
	return (
		<ul>
			{dataFiltered?.map(data => (
				<li key={data.id}>
					<h3>{data.name}</h3>
				</li>
			))}
		</ul>
	);
};
