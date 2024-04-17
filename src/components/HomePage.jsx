import { useGetData } from '../hooks/useGetData';
import { API_URL } from '../consts/urls';

export function HomePage() {
	const data = useGetData(API_URL);
	return (
		<ul>
			{data?.map(data => (
				<li key={data.id}>{data.name}</li>
			))}
		</ul>
	);
}
