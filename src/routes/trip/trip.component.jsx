import { useState, useContext, useEffect, Fragment } from 'react';
import { tripSearchContext } from '../../context/trip-search.context';

import TripSearchForm from '../../components/trip-search-form/trip-search-form.component';
import TripDirection from '../../components/trip-direction/trip-direction.component';
import TripRoute from '../../components/trip-route/trip-route.component';
import Loader from '../../components/loader/loader.component';

import { TripContainer, TripBodyContainer, TripRoutePreview } from './trip.style';

const Trip = () => {
	const { routeRealtimeData, isSearching } = useContext(tripSearchContext);
	const [reouteDirection, setRouteDirection] = useState(0);

	return (
		<TripContainer>
			<TripSearchForm setRouteDirection={setRouteDirection} />
			{routeRealtimeData.route && <TripDirection setRouteDirection={setRouteDirection} />}
			<TripBodyContainer>
				{isSearching ? (
					<TripRoutePreview>
						<Loader />
					</TripRoutePreview>
				) : (
					<Fragment>
						{routeRealtimeData.stops ? (
							<TripRoute routeDirection={reouteDirection} />
						) : (
							<TripRoutePreview>
								<span>請選擇公車路線...</span>
							</TripRoutePreview>
						)}
					</Fragment>
				)}
			</TripBodyContainer>
		</TripContainer>
	);
};

export default Trip;
