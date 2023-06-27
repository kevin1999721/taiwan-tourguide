import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background-color: #ffffff;
	padding: 0 20px;
`;

export const LogoNavigationContainer = styled.div`
	display: flex;
	max-width: 1400px;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	height: 105px;
	padding: 25px 0px;

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		padding: 10px 0px;
		gap: 10px;
	}
`;
