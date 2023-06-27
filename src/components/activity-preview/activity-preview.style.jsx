import styled from 'styled-components';

export const ActivityPreviewContainer = styled.div``;

export const ActivityCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 50px 20px;

	@media (max-width: 768px) {
		gap: 10px;
	}
`;
