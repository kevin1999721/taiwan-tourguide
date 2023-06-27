import styled from 'styled-components';

export const Option = styled.li`
	width: 100%;
	min-height: 40px;
	line-height: 30px;
	padding: 5px 10px;
	font-size: 16px;
	background-color: ${({ isShowSelectedOption }) => (isShowSelectedOption ? '#f8235b' : '#ffffff')};
	color: ${({ isShowSelectedOption }) => (isShowSelectedOption ? '#ffffff' : '#000000')};

	&:hover {
		background-color: #f8235b;
		color: #ffffff;
	}
`;
