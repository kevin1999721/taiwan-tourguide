import styled from 'styled-components';

export const PageCotrolButton = styled.button`
	border: none;
	border-radius: 5px;
	outline: none;
	padding: 10px;
	box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);

	&:active {
		transform: scale(0.96);
	}
`;

export const SwitchToPrevious = styled(PageCotrolButton)`
	background-color: #ffffff;
`;

export const SwitchToNext = styled(PageCotrolButton)`
	background-color: #000000;
	svg {
		path {
			stroke: #ffffff;
		}
	}
`;
