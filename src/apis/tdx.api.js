export const getTdxAccessToken = async () => {
	const parameter = {
		grant_type: 'client_credentials',
		client_id: 's1061602-0280d3e3-165e-46e6',
		client_secret: 'c4607f5b-c1d0-4bd7-8ae1-61d243375a6c',
	};

	const auth_url =
		'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';

	const response = await fetch(auth_url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams(parameter),
	});
	const accessToken = await response.json();
	return accessToken.access_token;
};
