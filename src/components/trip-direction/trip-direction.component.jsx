import { useContext } from 'react';
import { tripSearchContext } from '../../context/trip-search.context';

import CardShadow from '../card-shadow/card-shadow.component';

import {
	TripDirectionContainer,
	DirectionButtonsContainer,
	DirectionButton,
} from './trip-direction.style';

const TripDirection = ({ setRouteDirection }) => {
	const { routeRealtimeData } = useContext(tripSearchContext);

	const onDirectionButtonClick = direction => {
		return () => {
			setRouteDirection(direction);
		};
	};

	return (
		<TripDirectionContainer>
			<DirectionButtonsContainer>
				<DirectionButton onClick={onDirectionButtonClick(0)}>
					往<span>{routeRealtimeData.route[0].DestinationStopNameZh}</span>
				</DirectionButton>
				<DirectionButton onClick={onDirectionButtonClick(1)}>
					往<span>{routeRealtimeData.route[0].DepartureStopNameZh}</span>
				</DirectionButton>
			</DirectionButtonsContainer>
			<CardShadow />
		</TripDirectionContainer>
	);
};

export default TripDirection;
