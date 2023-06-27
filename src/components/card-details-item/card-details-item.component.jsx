import { DetailsItemContainer } from './card-details-item.style';

const CardDetailsItem = ({ Icon, text }) => {
	return (
		<DetailsItemContainer>
			<Icon />
			<span>{text}</span>
		</DetailsItemContainer>
	);
};

export default CardDetailsItem;
