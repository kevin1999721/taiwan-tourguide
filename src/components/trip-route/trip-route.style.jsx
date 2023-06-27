import styled from 'styled-components';

export const TripRouteContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	margin: auto;
`;

export const NotcieContainer = styled.div`
	margin-bottom: 10px;
	text-align: right;
	font-size: 16px;
	color: #ff1d6c;
`;

export const RouteStopsContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template-rows: ${({ stopsCount }) => {
		if (stopsCount > 10) {
			const gridRowsCount = Math.ceil(stopsCount / 2);
			return `repeat(${gridRowsCount},1fr);`;
		} else {
			return `repeat(${stopsCount} , 1fr);`;
		}
	}}
	grid-auto-flow:column;
	gap 20px;
	padding: 20px 10px;
	background-color: #ffffff;
	

	@media (max-width:768px){
		grid-template-rows: unset;
		grid-auto-flow: unset;
	}
`;
