import { useState, useRef } from 'react';
import { PAGE_BUTTON_TYPE } from '../page-controller/page-controller.component';

import { ReactComponent as TimeIcon } from '../../assets/icon/time.svg';
import { ReactComponent as TicketIcon } from '../../assets/icon/ticket.svg';
import { ReactComponent as MapIcon } from '../../assets/icon/map.svg';
import { ReactComponent as telephoneIcon } from '../../assets/icon/tel.svg';
import CardDetailsItem from '../card-details-item/card-details-item.component';
import CloseButton from '../close-button/close-button.component';
import PageController from '../page-controller/page-controller.component';
import ImagePlaceholder from '../image-placeholder/image-placeholder.component';

import {
	CardDetailsBackgorund,
	CardDetailsContainer,
	CloseButtonContainer,
	ImageContainer,
	PageControlerContianer,
	CardBody,
	CardBottom,
	CardAndButtonContainer,
} from './card-details.style';

const cardDetailsItemIcon = [TimeIcon, TicketIcon, MapIcon, telephoneIcon];

const CardDetails = ({ tourismItem, closeHandler }) => {
	const [imageIndex, setImageIndex] = useState(0);
	const refCardDetailsContainer = useRef(null);
	const pageControlHnadler = (direction = 1) => {
		return () => {
			if (imageIndex + direction >= 0 && imageIndex + direction < tourismItem.images.length) {
				setImageIndex(imageIndex + direction);
			}
		};
	};

	const onBackgroundClick = e => {
		const target = e.target;
		const cardDetailsContainer = refCardDetailsContainer.current;

		if (
			cardDetailsContainer &&
			cardDetailsContainer !== target &&
			target.contains(cardDetailsContainer)
		)
			closeHandler();
	};

	const onCloseButtonClick = () => closeHandler();

	return (
		<CardDetailsBackgorund onClick={onBackgroundClick}>
			<CardAndButtonContainer>
				<CloseButtonContainer>
					<CloseButton onClick={onCloseButtonClick} />
				</CloseButtonContainer>
				<CardDetailsContainer ref={refCardDetailsContainer}>
					<ImageContainer>
						{tourismItem.images.length > 0 ? (
							<img
								src={tourismItem.images[imageIndex].imageUrl}
								alt={tourismItem.images[imageIndex].imageDescription}
							/>
						) : (
							<ImagePlaceholder />
						)}
					</ImageContainer>
					{tourismItem.images.length > 1 && (
						<PageControlerContianer>
							<PageController
								pageButtonType={PAGE_BUTTON_TYPE.PREVIOUSE}
								onButtonClick={pageControlHnadler(-1)}
							/>
							<PageController
								pageButtonType={PAGE_BUTTON_TYPE.NEXT}
								onButtonClick={pageControlHnadler(1)}
							/>
						</PageControlerContianer>
					)}
					<CardBody>
						<h2>{tourismItem.name}</h2>
						<p>{tourismItem.description}</p>
					</CardBody>
					<CardBottom>
						{Object.keys(tourismItem.details).map((key, index) => {
							const Icon = cardDetailsItemIcon[index];
							return (
								tourismItem.details[key] && (
									<CardDetailsItem key={key} Icon={Icon} text={tourismItem.details[key]} />
								)
							);
						})}
					</CardBottom>
				</CardDetailsContainer>
			</CardAndButtonContainer>
		</CardDetailsBackgorund>
	);
};

export default CardDetails;
