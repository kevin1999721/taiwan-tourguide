import { useContext, useState, useEffect } from 'react';
import { tripSearchContext } from '../../context/trip-search.context';

import RouteStop from '../route-stop/route-stop.component';

import { TripRouteContainer, NotcieContainer, RouteStopsContainer } from './trip-route.style';

const TripRoute = ({ routeDirection }) => {
	const { routeRealtimeData } = useContext(tripSearchContext);
	const routeStopsSlice = routeRealtimeData.stops.filter(item => {
		return item.Direction === routeDirection;
	});

	const routeStops = routeStopsSlice.length > 0 ? routeStopsSlice[0].Stops : null;

	return (
		<TripRouteContainer>
			<NotcieContainer>
				<span>*每隔 15 秒自動更新</span>
			</NotcieContainer>
			<RouteStopsContainer stopsCount={routeStops ? routeStops.length : 0}>
				{routeStops ? (
					routeStops.map(stop => {
						return (
							<RouteStop
								key={stop.StopID}
								routeDirection={routeDirection}
								stopID={stop.StopID}
								stopName={stop.StopName.Zh_tw}
							/>
						);
					})
				) : (
					<span>暫無資料 !</span>
				)}
			</RouteStopsContainer>
		</TripRouteContainer>
	);
};

export default TripRoute;
