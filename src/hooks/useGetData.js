/* eslint-disable camelcase */

export const useGetData = async url => {
	console.log(url);
	try {
		const data = await fetch(url);
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
		console.log(error);
	}
};
