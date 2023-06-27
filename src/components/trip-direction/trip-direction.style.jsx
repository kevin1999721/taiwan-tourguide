import styled from 'styled-components';

export const TripDirectionContainer = styled.div`
	position: relative;
	background-color: #ffffff;
`;

export const DirectionButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const DirectionButton = styled.button`
	flex-grow: 1;
	border: none;
	outline: none;
	padding: 10px 0;
	max-width: 250px;
	height: 50px;
	font-size: 16px;
	background-color: #ffffff;
	span {
		margin-left: 5px;
		color: #ff1d6c;
	}
`;
