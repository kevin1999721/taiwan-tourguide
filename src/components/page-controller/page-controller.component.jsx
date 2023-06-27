import { ReactComponent as PreviousIcon } from '../../assets/icon/previous.svg';
import { ReactComponent as NextIcon } from '../../assets/icon/next.svg';

import { SwitchToPrevious, SwitchToNext } from './page-controller.style';

export const PAGE_BUTTON_TYPE = {
	PREVIOUSE: 'previous',
	NEXT: 'next',
};

export const PAGE_BUTTON_ICON = {
	[PAGE_BUTTON_TYPE.PREVIOUSE]: PreviousIcon,
	[PAGE_BUTTON_TYPE.NEXT]: NextIcon,
};

export const PAGE_BUTTON = {
	[PAGE_BUTTON_TYPE.PREVIOUSE]: SwitchToPrevious,
	[PAGE_BUTTON_TYPE.NEXT]: SwitchToNext,
};

const PageController = ({ pageButtonType, onButtonClick }) => {
	const PageButton = PAGE_BUTTON[pageButtonType];
	const ButtonIcon = PAGE_BUTTON_ICON[pageButtonType];

	return (
		<PageButton onClick={onButtonClick}>
			<ButtonIcon />
		</PageButton>
	);
};

export default PageController;
