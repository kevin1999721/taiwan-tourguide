import styled, { css } from 'styled-components';

import { STOP_EVENT, STOP_STATUS } from './route-stop.component';

export const RouteStopContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
`;

export const StopNotice = styled.span`
	width: 100px;
	padding: 10px 0;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;

	${({ stopEvent, stopStatus }) => {
		if (stopEvent) {
			switch (stopEvent) {
				case STOP_EVENT[0]:
					return css`
						color: #ffffff;
						background-color: #ffb72c;
						border: 1px solid #ffb72c;
					`;
				case STOP_EVENT[1]:
					return css`
						color: #ffffff;
						background-color: #ff1d6c;
						border: 1px solid #ff1d6c;
					`;
				default:
					return css``;
			}
		} else {
			switch (stopStatus) {
				case STOP_STATUS[0]:
					return css``;
				default:
					return css`
						color: #acacac;

						border: 1px solid #acacac;
					`;
			}
		}
	}}
`;

export const StopName = styled.span`
	margin-left: 10px;
`;
