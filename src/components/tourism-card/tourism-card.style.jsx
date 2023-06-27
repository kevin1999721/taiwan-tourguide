import styled from 'styled-components';

export const TourismCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	height: 250px;
	padding: 10px;
	gap: 10px;
	background-color: #ffffff;
	position: relative;
	cursor: pointer;

	@media (max-width: 1280px) {
		min-width: 150px;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 55%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const CardBody = styled.div`
	font-size: 14px;
	font-weight: 600;
`;

export const CardBottom = styled.div`
	display: flex;
	align-items: center;
	margin-top: auto;
	font-size: 12px;
	color: #007350;

	svg {
		flex-shrink: 0;
		vertical-align: bottom;
	}
`;
