import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
	display: flex;
	justify-content: center;
	gap: 20px;

	@media (max-width: 768px) {
		justify-content: space-around;
		gap: 0px;
		min-width: 300px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 6px;
	}
`;

export const LinkContinaer = styled(Link)`
	display: flex;
	gap: 5px;
	align-items: center;
	position: relative;

	&:nth-child(1) {
		color: #ff1d6c;

		&::after {
			background-color: #ff1d6c;
		}
	}
	&:nth-child(2) {
		color: #ffb72c;

		&::after {
			background-color: #ffb72c;
		}
	}
	}
	&:nth-child(3) {
		color: #007350;

		&::after {
			background-color: #007350;
		}
	}

	&::after {
		content: '';
		width: 0%;
		height: 2px;
		position: absolute;
		bottom: -7px;
		left: 50%;
		transform: translate(-50%, 0);
		transition: 0.5s;
	}

	&:hover {
		&::after {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		padding: 10px 10px;
		text-align: center;
		color: #acacac !important;

		svg {
			display: none;
		}

		&::after {
			bottom:0;
		}

		&:hover {
			font-weight: 600;
			color: #ff1d6c !important;
		}

		&.active {
			&::after {
				width: 100%;
				
			}
		}
	}
`;
