import { useState, Fragment } from 'react';

import { ReactComponent as MapIcon } from '../../assets/icon/map.svg';
import CardShadow from '../card-shadow/card-shadow.component';
import CardDetails from '../card-details/card-details.component';
import ImagePlaceholder from '../image-placeholder/image-placeholder.component';

import { TourismCardContainer, ImageContainer, CardBody, CardBottom } from './tourism-card.style';

const TourismCard = ({ tourismItem }) => {
	const [isDetailsCardOpen, setIsDetailsCardOpen] = useState(false);

	const cardClickHandler = () => {
		setIsDetailsCardOpen(true);
	};

	const closeHandler = () => {
		setIsDetailsCardOpen(false);
	};

	return (
		<Fragment>
			<TourismCardContainer onClick={cardClickHandler}>
				<ImageContainer>
					{tourismItem.images.length > 0 ? (
						<img
							src={tourismItem.images[0].imageUrl}
							alt={tourismItem.images[0].imageDescription}
						/>
					) : (
						<ImagePlaceholder />
					)}
				</ImageContainer>
				<CardBody>
					<p>{tourismItem.name}</p>
				</CardBody>
				<CardBottom>
					<MapIcon />
					<span>{tourismItem.details.address ? tourismItem.details.address : ''}</span>
				</CardBottom>
				<CardShadow />
			</TourismCardContainer>
			{isDetailsCardOpen && <CardDetails tourismItem={tourismItem} closeHandler={closeHandler} />}
		</Fragment>
	);
};

export default TourismCard;
