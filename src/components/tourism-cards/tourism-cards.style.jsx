import styled from 'styled-components';

export const TourismContainer = styled.div``;

export const TourismCardsContainer = styled.div`
	display: grid;
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

export const PageControllersContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 800px;
	height: 500px;
	margin: auto;
`;
