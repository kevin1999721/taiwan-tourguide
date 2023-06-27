import { useState } from 'react';

import ImagePlaceholder from '../image-placeholder/image-placeholder.component';
import { ReactComponent as MapIcon } from '../../assets/icon/map.svg';
import CardShadow from '../card-shadow/card-shadow.component';
import CardDetails from '../card-details/card-details.component';

import {
	ActivityCardContainer,
	ActivityImageContainer,
	CardDetailsContainer,
	CardDetailsBody,
	CardDetailsBottom,
	MapIconContainer,
	ButtonShowDetails,
} from './activity-card.style';

const ActivityCard = ({ tourismItem }) => {
	const [isDetailsCardOpen, setIsDetailsCardOpen] = useState(false);

	const cardClickHandler = () => {
		setIsDetailsCardOpen(true);
	};

	const closeHandler = () => {
		setIsDetailsCardOpen(false);
	};

	return (
		<ActivityCardContainer>
			<ActivityImageContainer>
				{tourismItem.images.length > 0 ? (
					<img src={tourismItem.images[0].imageUrl} alt={tourismItem.images[0].imageDescription} />
				) : (
					<ImagePlaceholder />
				)}
			</ActivityImageContainer>
			<CardDetailsContainer>
				<CardDetailsBody>
					<h1>{tourismItem.name}</h1>
					<p>{tourismItem.description}</p>
				</CardDetailsBody>
				<CardDetailsBottom>
					<MapIconContainer>
						<MapIcon />
						<p>{tourismItem.location}</p>
					</MapIconContainer>
					<ButtonShowDetails onClick={cardClickHandler}>活動詳情</ButtonShowDetails>
				</CardDetailsBottom>
			</CardDetailsContainer>
			<CardShadow />
			{isDetailsCardOpen && <CardDetails tourismItem={tourismItem} closeHandler={closeHandler} />}
		</ActivityCardContainer>
	);
};

export default ActivityCard;
