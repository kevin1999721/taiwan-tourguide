import { createContext, useState, useEffect } from 'react';
import { fetchTripDataWithType, TRIP_TYPE } from '../apis/trip.api';

export const tripSearchContext = createContext({
	isSearching: false,
	setIsSearching: () => null,
	tripRoutes: [],
	setTripRoutes: () => null,
	routeRealtimeData: {},
	fetchRouteRealtimeData: async () => null,
});

export const TripSearchProvider = ({ children }) => {
	const [isSearching, setIsSearching] = useState(false);
	const [tripRoutes, setTripRoutes] = useState([]);
	const [routeRealtimeData, setRouteRealtimeData] = useState({
		route: null,
		stops: null,
		estimatedTime: null,
		nearStop: null,
	});

	useEffect(() => {
		const fetchTripRoute = async () => {
			const tripRouteData = await fetchTripDataWithType(TRIP_TYPE.ROUTE);
			setTripRoutes(tripRouteData);
		};
		fetchTripRoute();
	}, []);

	const fetchRouteRealtimeData = async selectedRoute => {
		const route = tripRoutes.filter(ruote => {
			return ruote.TaiwanTripName.Zh_tw === selectedRoute;
		});
		const stops = await fetchTripDataWithType(TRIP_TYPE.STOP_OF_ROUTE, selectedRoute);
		const estimatedTime = await fetchTripDataWithType(TRIP_TYPE.ESTIMATED_TIME, selectedRoute);
		const nearStop = await fetchTripDataWithType(TRIP_TYPE.NEAR_STOP, selectedRoute);
		setRouteRealtimeData({ route, stops, estimatedTime, nearStop }, selectedRoute);
	};

	const value = {
		isSearching,
		setIsSearching,
		tripRoutes,
		setTripRoutes,
		routeRealtimeData,
		fetchRouteRealtimeData,
	};
	return <tripSearchContext.Provider value={value}>{children}</tripSearchContext.Provider>;
};
