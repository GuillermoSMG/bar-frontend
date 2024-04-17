import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProductsContainer } from './components/ProductsContainer';
import { useProductsStore } from './store/products';
import { useEffect } from 'react';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
