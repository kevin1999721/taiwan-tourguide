import styled from 'styled-components';

export const DropDownContainer = styled.div`
	flex: 1;
	height: 40px;
	position: relative;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	cursor: pointer;
`;

export const SelectedOptionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	line-height: 30px;
	padding: 5px 10px;
	border: ${({ isDropDownOpen }) => {
		return isDropDownOpen ? '1px solid #dadada' : 'none';
	}};
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	background-color: #ffffff;
	position: relative;

	span {
		overflow: hidden;
		// display: -webkit-box;
		// -webkit-box-orient: vertical;
		// -webkit-line-clamp: 1;
	}
`;

export const DropDownIconContainer = styled.div`
	align-self: center;
	line-height: 0;
	transform: ${({ isDropDownOpen }) => {
		return isDropDownOpen ? '' : 'rotate(180deg)';
	}};
`;

export const DropDownList = styled.ul`
	width: 100%;
	max-height: 250px;
	border-radius: 3px;
	overflow: auto;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 5;
	background-color: #ffffff;
`;
