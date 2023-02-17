export const oktaConfig = {
	issuer: `https://${process.env.REACT_APP_OKTA_BASE}`,
	clientId: process.env.REACT_APP_OKTA_CLIENT,
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email", "groups"],
	pkce: true,
};
