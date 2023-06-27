import { getTdxAccessToken } from './tdx.api';

export const TOURISM_TYPE = {
	SCENIC_SPOT: 'SCENIC_SPOT',
	RESTAURANT: 'RESTAURANT',
	HOTEL: 'HOTEL',
	ACTIVITY: 'ACTIVITY',
};

const TOURISM_API_URL = {
	[TOURISM_TYPE.SCENIC_SPOT]: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot',
	[TOURISM_TYPE.RESTAURANT]: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant',
	[TOURISM_TYPE.HOTEL]: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel',
	[TOURISM_TYPE.ACTIVITY]: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity',
};

export const API_INITIAL_PARAMETERS = {
	$format: 'JSON',
	$top: '100',
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

export const convertTourismDataField = (tourismType, tourismItem) => {
	let newDataField = {};

	switch (tourismType) {
		case TOURISM_TYPE.ACTIVITY:
			newDataField = {
				id: tourismItem.ActivityID,
				name: tourismItem.ActivityName,
				description: tourismItem.Description,
				location: tourismItem.Location,
				details: {
					cycle: tourismItem.Cycle,
					charge: tourismItem.Charge,
					address: tourismItem.Address,
					phone: tourismItem.Phone,
				},
			};
			break;
		case TOURISM_TYPE.RESTAURANT:
			newDataField = {
				id: tourismItem.RestaurantID,
				name: tourismItem.RestaurantName,
				description: tourismItem.Description,
				details: {
					openTime: tourismItem.OpenTime,
					charge: '',
					address: tourismItem.Address,
					phone: tourismItem.Phone,
				},
			};
			break;
		case TOURISM_TYPE.SCENIC_SPOT:
			newDataField = {
				id: tourismItem.ScenicSpotID,
				name: tourismItem.ScenicSpotName,
				description: tourismItem.Description,
				details: {
					openTime: tourismItem.OpenTime,
					ticketInfo: tourismItem.TicketInfo,
					address: tourismItem.Address,
					phone: tourismItem.Phone,
				},
			};
			break;
		case TOURISM_TYPE.HOTEL:
			newDataField = {
				id: tourismItem.HotelID,
				name: tourismItem.HotelName,
				description: tourismItem.Description,
				details: {
					openTime: tourismItem.OpenTime,
					spec: tourismItem.Spec,
					address: tourismItem.Address,
					phone: tourismItem.Phone,
				},
			};
			break;
		default:
			break;
	}

	newDataField.images = [
		{
			imageUrl: tourismItem.Picture.PictureUrl1,
			imageDescription: tourismItem.Picture.PictureDescription1,
		},
		{
			imageUrl: tourismItem.Picture.PictureUrl2,
			imageDescription: tourismItem.Picture.PictureDescription2,
		},
		{
			imageUrl: tourismItem.Picture.PictureUrl3,
			imageDescription: tourismItem.Picture.PictureDescription3,
		},
	].filter(image => Boolean(image.imageUrl));

	return newDataField;
};

export const fetchTourismDataWithType = async (
	tourismType,
	selectedCity = '',
	addintionlParameters = {}
) => {
	if (!tourismType) return;

	const apiUrl = selectedCity
		? TOURISM_API_URL[tourismType] + `/${selectedCity}`
		: TOURISM_API_URL[tourismType];

	const apiParameters = {
		...API_INITIAL_PARAMETERS,
		...addintionlParameters,
	};

	const fetchUrl = combineUrlAndParameters(apiUrl, apiParameters);
	const accessToken = await getTdxAccessToken();
	const response = await fetch(fetchUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
	return await response.json();
};
