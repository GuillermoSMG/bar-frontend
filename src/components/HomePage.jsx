import { useGetData } from '../hooks/useGetData';

export function HomePage({ texto }) {
	const data = useGetData('src\\mocks\\bebidas.json');
	console.log(data);
	return (
		<ul>
			{data?.map(data => (
				<li key={data.id}>{data.name}</li>
			))}
		</ul>
	);
}
