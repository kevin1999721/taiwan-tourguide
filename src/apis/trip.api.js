import { getTdxAccessToken } from './tdx.api';

export const TRIP_TYPE = {
	ROUTE: 'ROUTE',
	STOP_OF_ROUTE: 'STOP_OF_ROUTE',
	ESTIMATED_TIME: 'ESTIMATED_TIME',
	NEAR_STOP: 'NEAR_STOP',
};

const TRIP_API_URL = {
	[TRIP_TYPE.ROUTE]: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Bus/Route/TaiwanTrip',
	[TRIP_TYPE.STOP_OF_ROUTE]:
		'https://tdx.transportdata.tw/api/basic/v2/Tourism/Bus/StopOfRoute/TaiwanTrip',
	[TRIP_TYPE.ESTIMATED_TIME]:
		'https://tdx.transportdata.tw/api/basic/v2/Tourism/Bus/EstimatedTimeOfArrival/TaiwanTrip',
	[TRIP_TYPE.NEAR_STOP]:
		'https://tdx.transportdata.tw/api/basic/v2/Tourism/Bus/RealTimeNearStop/TaiwanTrip',
};

export const API_INITIAL_PARAMETERS = {
	$format: 'JSON',
};

const combineUrlAndParameters = (url = '', parameters = {}) => {
	const parmetersToString = Object.keys(parameters)
		.map(objectKey => {
			return objectKey + '=' + parameters[objectKey];
		})
		.join('&');

	const fetchUrl = url + '?' + parmetersToString;
	return fetchUrl;
};

export const fetchTripDataWithType = async (
	tripType,
	selectedRoute = '',
	addintionlParameters = {}
) => {
	if (!tripType) return;

	const apiUrl = selectedRoute
		? TRIP_API_URL[tripType] + `/${selectedRoute}`
		: TRIP_API_URL[tripType];

	const apiParameters = {
		...API_INITIAL_PARAMETERS,
		...addintionlParameters,
	};

	const fetchUrl = combineUrlAndParameters(apiUrl, apiParameters);
	const accessToken = await getTdxAccessToken();
	const response = await fetch(fetchUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
	return await response.json();
};
