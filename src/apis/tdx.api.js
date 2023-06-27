export const getTdxAccessToken = async () => {
	const parameter = {
		grant_type: 'client_credentials',
		client_id: process.env.REACT_APP_TDX_CLIENT_ID,
		client_secret: process.env.REACT_APP_TDX_CLIENT_SECRET,
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
