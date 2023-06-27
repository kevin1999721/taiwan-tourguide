import styled from 'styled-components';

export const CityCardContainer = styled.div`
	padding: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	background: #ffffff;

	&:nth-child(3n + 1) {
		grid-row: 1 / 3;
		width: 200px;
		height: 255px;
	}
	&:nth-child(3n + 2) {
		grid-row: 1 / 2;
		width: 200px;
		height: 125px;
	}
	&:nth-child(3n + 3) {
		grid-row: 2 / 3;
		width: 200px;
		height: 125px;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	color: #ffffff;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	top: 0;
	left: 0;

	svg,
	span {
		transition: 0.5s;
	}

	&:hover {
		svg,
		span {
			transform: translate(0, -5px);
		}
	}
`;

export const CardBody = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;

	&:hover ${ImageContainer} > img {
		transform: scale(1.1);
	}
`;
