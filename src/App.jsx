// Dependencies
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Header from './components/common/Header/Header';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
