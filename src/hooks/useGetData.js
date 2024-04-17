/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

export const useGetData = url => {
	try {
		const [data, setData] = useState([]);
		useEffect(() => {
			fetch(`${url}`)
				.then(res => res.json())
				.then(res => setData(res));
		}, [url]);

		return data?.map(
			({
				Id,
				Nombre,
				Grado_alcohol,
				Stock,
				Vendidos,
				Precio,
				Es_bebida,
				Es_trago,
			}) => ({
				id: Id,
				name: Nombre,
				alcoholic_degree: Grado_alcohol,
				stock: Stock,
				sold: Vendidos,
				price: Precio,
				beverage: Es_bebida,
				drink: Es_trago,
			})
		);
	} catch (error) {
		throw new Error('Error searching drinks.');
	}
};
