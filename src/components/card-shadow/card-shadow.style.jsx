import styled from 'styled-components';

export const CardShadowContainer = styled.div`
	width: 100%;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: -1;
	transform: translate(0, -50%);

	svg {
		width: 100%;
		height: auto;
		vertical-align: bottom;
	}
`;
