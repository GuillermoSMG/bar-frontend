/* eslint-disable camelcase */
import { API_URL } from '../consts/urls';

export const useGetData = async url => {
	try {
		const data = await fetch(API_URL);
		const dataJson = await data.json();
		return dataJson?.map(
			({ Id, Nombre, Grado_alcohol, Stock, Vendidos, Precio, Categoria }) => ({
				id: Id,
				name: Nombre,
				alcoholic_degree: Grado_alcohol,
				stock: Stock,
				sold: Vendidos,
				price: Precio,
				category: Categoria,
			})
		);
	} catch (error) {
		throw new Error('Error searching drinks.');
	}
};
