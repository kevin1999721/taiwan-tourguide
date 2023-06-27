import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
    0%{
        opacity:1
    }
    75%{

        opacity:0
    }
`;

const animationDuration = '1';

export const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const IconContainer = styled.div`
	display: flex;
	gap: 5px;

	svg {
		opacity: 0;
		animation-name: ${loaderAnimation};
		animation-duration: ${animationDuration}s;
		animation-iteration-count: infinite;
	}

	svg:nth-child(1) {
		animation-delay: 0s;
	}

	svg:nth-child(2) {
		animation-delay: ${animationDuration / 3}s;
	}

	svg:nth-child(3) {
		animation-delay: ${(animationDuration / 3) * 2}s;
	}
`;
