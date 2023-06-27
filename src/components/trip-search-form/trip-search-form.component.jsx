import { useEffect, useState, useContext, Fragment } from 'react';
import { tripSearchContext } from '../../context/trip-search.context';

import SearchButton from '../search-button/search-button.component';
import Dropdown from '../dropdown/dropdown.component';

import { TripSearchFormContainer, SearchForm } from './trip-search-form.style';

import taiwanCityData from '../../data/taiwan-city-county-data.json';

const optionCities = [{ id: 0, key: '', value: '縣市' }].concat(taiwanCityData);

const TripSearchForm = ({ setRouteDirection }) => {
	const { tripRoutes, routeRealtimeData, fetchRouteRealtimeData, setIsSearching } =
		useContext(tripSearchContext);
	const [routeOptions, setRouteOptions] = useState([]);
	const [selectedRoute, setSelectedRoute] = useState({ id: 0, key: '', value: '路線' });
	const [selectedCity, setSelectedCity] = useState({ id: 0, key: '', value: '縣市' });
	const [searchedRoute, setSearchedRoute] = useState('');

	const fetchTripRoute = async routeToSearch => {
		setIsSearching(true);
		await fetchRouteRealtimeData(routeToSearch);
		setIsSearching(false);
	};

	useEffect(() => {
		if (tripRoutes.length <= 0) return;

		const filterRoutes = [{ id: 0, key: '', value: '路線' }].concat(
			tripRoutes
				.filter(ruote => {
					return ruote.City === selectedCity.key;
				})
				.map((route, index) => {
					return {
						id: index + 1,
						key: route.TaiwanTripName.Zh_tw,
						value: route.TaiwanTripName.Zh_tw,
					};
				})
		);
		setSelectedRoute(filterRoutes[0]);
		setRouteOptions(filterRoutes);

		return;
	}, [selectedCity]);

	useEffect(() => {
		if (!searchedRoute) return;
		setRouteDirection(0);

		const timer = setInterval(async () => {
			fetchTripRoute(searchedRoute);
		}, 15000);

		return () => {
			clearInterval(timer);
		};
	}, [searchedRoute]);

	const onSearchFormSubmit = async e => {
		e.preventDefault();
		if (!selectedRoute.key) {
			alert('請選擇路線!');
			return;
		}

		fetchTripRoute(selectedRoute.key);
		setSearchedRoute(selectedRoute.key);
	};

	return (
		<TripSearchFormContainer>
			<SearchForm onSubmit={onSearchFormSubmit}>
				{tripRoutes.length === 0 ? null : (
					<Fragment>
						{' '}
						<Dropdown
							options={optionCities}
							selectedOption={selectedCity}
							setSearchCondition={setSelectedCity}
						/>
						<Dropdown
							options={routeOptions}
							selectedOption={selectedRoute}
							setSearchCondition={setSelectedRoute}
						/>
						<SearchButton />
					</Fragment>
				)}
			</SearchForm>
		</TripSearchFormContainer>
	);
};

export default TripSearchForm;
