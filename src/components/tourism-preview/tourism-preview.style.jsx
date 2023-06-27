import styled from 'styled-components';

export const TourismPreviewContainer = styled.div``;

export const TourismCardsContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(5, minmax(200px, 250px));
	justify-content: space-between;
	gap: 20px 20px;

	@media (max-width: 1280px) {
		grid-template-columns: repeat(4, minmax(150px, 250px));
		gap: 10px 10px;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(150px, 250px));
		justify-content: center;
	}
`;
