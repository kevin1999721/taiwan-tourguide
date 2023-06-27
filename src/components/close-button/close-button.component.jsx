import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';

import { CloseButtonContainer } from './close-button.style';

const CloseButton = ({ onClick }) => {
	return (
		<CloseButtonContainer onClick={onClick}>
			<CloseIcon />
		</CloseButtonContainer>
	);
};

export default CloseButton;
