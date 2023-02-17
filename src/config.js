export const oktaConfig = {
	issuer: process.env.OKTA_URL,
	clientId: process.env.CLIENT_ID,
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email", "groups"],
	pkce: true,
};
