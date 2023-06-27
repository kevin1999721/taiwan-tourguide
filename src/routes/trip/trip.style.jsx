import styled from 'styled-components';

export const TripContainer = styled.div``;

export const SearchResultContainer = styled.div``;

export const LoaderContainer = styled.div`
	width: 100%;
	height: 1000px;
`;

export const TripBodyContainer = styled.div`
	padding: 50px 50px;

	@media (max-width: 768px) {
		padding: 50px 10px;
	}
`;

export const TripRoutePreview = styled.div`
	max-width: 800px;
	height: 1000px;
	margin: auto;
	padding: 50px;
	font-size: 24px;
	background: #ffffff;
	color: #acacac;
`;
