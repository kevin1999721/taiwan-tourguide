import { Routes, Route } from 'react-router-dom';

import { TourismSearchProvider } from './context/tourism-search.context';
import { TripSearchProvider } from './context/trip-search.context';

import PageDefault from './routes/page-default/page-default.component';
import Tourism from './routes/tourism/tourism.component';
import Trip from './routes/trip/trip.component';

import './App.css';
function App() {
	return (
		<Routes>
			<Route path="/" element={<PageDefault />}>
				<Route
					index
					element={
						<TourismSearchProvider>
							<Tourism />
						</TourismSearchProvider>
					}
				/>
				<Route
					path="/trip"
					element={
						<TripSearchProvider>
							<Trip />
						</TripSearchProvider>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
