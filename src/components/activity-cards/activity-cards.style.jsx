import styled from 'styled-components';

export const ActivityContainer = styled.div``;

export const ActivityCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 50px 20px;

	@media (max-width: 768px) {
		gap: 10px;
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
`;
