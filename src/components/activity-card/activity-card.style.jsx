import styled from 'styled-components';

export const ActivityCardContainer = styled.div`
	flex-grow: 1;
	display: flex;
	width: 530px;
	height: 220px;
	gap: 10px;
	padding: 10px;
	background-color: #ffffff;
	position: relative;
`;

export const ActivityImageContainer = styled.div`
	width: 190px;
	height: 100%;
	flex-shrink: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		width: 150px;
	}
`;

export const CardDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const CardDetailsBody = styled.div`
	overflow: hidden;

	h1 {
		font-size: 16px;
		margin-bottom: 10px;
	}

	p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 6;
		overflow: hidden;
		word-break: break-all;
		height: 100%;
		color: #acacac;
		font-size: 14px;

		@media (max-width: 768px) {
			-webkit-line-clamp: 3;
		}
	}
`;

export const CardDetailsBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: auto;

	@media (max-width: 768px) {
		flex-direction: column;
		margin-top: auto;
		gap: 10px;
	}
`;

export const MapIconContainer = styled.div`
	display: flex;

	svg {
		vertical-align: bottom;
	}

	p {
		display: inline-block;
	}
`;

export const ButtonShowDetails = styled.button`
	width: 120px;
	height: 40px;
	border: 1px solid #ff1d6c;
	border-radius: 3px;
	outline: none;
	color: #ff1d6c;
	background-color: #ffffff;
`;
