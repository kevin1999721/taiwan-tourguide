import styled from 'styled-components';
import formBackgroundImage from '../../assets/landscape.png';

export const SearchFormContainer = styled.div`
	min-width: 300px;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Description = styled.span`
	line-height: 21px;
	color: #ffffff;
`;

export const SearchInputsContainer = styled.div`
	margin: 5px 0;
`;

export const SelectDropdownContainer = styled.div`
	display: flex;
	margin: 5px 0;
	gap: 5px;
`;

export const SearchFormBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 550px;
	border: 10px solid #ffffff;
	background: url(${formBackgroundImage}) center / cover no-repeat;
	position: relative;

	@media (max-width: 768px) {
		height: auto;
		border: none;
		background: unset;
		background-color: #ffffff;
		padding-bottom: 10px;
	}
`;
