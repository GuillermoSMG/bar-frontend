import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProductsContainer } from './components/ProductsContainer';

function App() {
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
