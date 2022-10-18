import { Route, Routes } from 'react-router-dom';
import { NotFoundProvider } from './context/NotFoundContext';
import Footer from './core-ui/Footer';
import Navbar from './core-ui/Navbar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<NotFoundProvider>
			<Navbar />
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</NotFoundProvider>
	);
}
// HEADINGS
// "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
// BODY
// "Helvetica Neue", Helvetica, Arial, sans-serif
export default App;
