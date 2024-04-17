import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProductsContainer } from './components/ProductsContainer';
import { useProductsStore } from './store/products';
import { useEffect } from 'react';
import { ProductDetail } from './components/ProductDetail';

function App() {
	const { FetchProducts } = useProductsStore(state => state);
	useEffect(() => {
		FetchProducts();
	}, [FetchProducts]);
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/:category' element={<ProductsContainer />} />
				<Route
					path='/:category/:productName/:productId'
					element={<ProductDetail />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
