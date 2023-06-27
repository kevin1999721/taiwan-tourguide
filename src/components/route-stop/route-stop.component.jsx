import { useContext } from 'react';
import { tripSearchContext } from '../../context/trip-search.context';

import { RouteStopContainer, StopNotice, StopName } from './route-stop.style';

export const STOP_EVENT = {
	0: '離站中',
	1: '進站中',
};

export const STOP_STATUS = {
	0: '正常',
	1: '尚未發車',
	2: '交管不停靠',
	3: '末班車已過',
	4: '今日未營運',
};

const transformTime = estimatedTime => {
	const date = new Date(+new Date() + estimatedTime * 1000);
	let hour = date.getHours().toString().padStart(2, '0');
	let minutes = date.getMinutes().toString().padStart(2, '0');
	return `${hour}:${minutes}`;
};

const RouteStop = ({ routeDirection, stopID, stopName }) => {
	const { routeRealtimeData } = useContext(tripSearchContext);
	const stopEstimatedTimeSlice = routeRealtimeData.estimatedTime.filter(stop => {
		if (stop.Direction === 0 || stop.Direction === 1)
			return stop.Direction === routeDirection && stop.StopID === stopID;
		else return stop.StopID === stopID;
	});
	const nearStopSlice = routeRealtimeData.nearStop.filter(stop => {
		return stop.Direction === routeDirection && stop.StopID === stopID;
	});

	const nearStop = nearStopSlice.length > 0 ? nearStopSlice[0] : null;
	const stopEstimatedTime = stopEstimatedTimeSlice[0];

	// check is stopEvent exist, if true display stopEvent, false show stopStatus
	const stopNotice = nearStop
		? STOP_EVENT[nearStop.A2EventType]
		: stopEstimatedTime.StopStatus === 0
		? transformTime(stopEstimatedTime.EstimateTime)
		: STOP_STATUS[stopEstimatedTime.StopStatus];

	return (
		<RouteStopContainer>
			<StopNotice
				stopEvent={nearStop ? STOP_EVENT[nearStop.A2EventType] : false}
				stopStatus={STOP_STATUS[stopEstimatedTime.StopStatus]}
			>
				{stopNotice}
			</StopNotice>
			<StopName>{stopName}</StopName>
		</RouteStopContainer>
	);
};

export default RouteStop;
