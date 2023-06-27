import styled, { keyframes } from 'styled-components';

const showCard = keyframes`
	0%{
		opacity:0;
	}
	100%{
		opacity:1;
	}
`;

export const CardDetailsBackgorund = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	background: rgba(240, 240, 240, 0.5);
	backdrop-filter: blur(10px);
	animation: ${showCard} 0.3s;
`;

export const CardAndButtonContainer = styled.div`
	position: relative;
	margin: 0 20px;
`;

export const CardDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	background-color: #ffffff;
	max-width: 600px;
	position: relative;
	max-height: 70vh;
	overflow: auto;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const CloseButtonContainer = styled.div`
	position: absolute;
	top: 0;
	left: 100%;
	margin-left: 10px;

	@media (max-width: 768px) {
		top: unset;
		left: unset;
		margin-left: 0px;

		right: 0;
		bottom: 100%;
		margin-bottom: 10px;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 400px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const PageControlerContianer = styled.div`
	display: flex;
	gap: 0 10px;
	margin-left: auto;
`;

export const CardBody = styled.div`
	h2 {
		font-size: 18px;
		margin-bottom: 10px;
	}
	p {
		word-break: break-all;
		font-size: 14px;
	}
`;

export const CardBottom = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
