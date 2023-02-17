export const oktaConfig = {
	issuer: "https://sso.informatica.com",
	clientId: "0oa1mqropuduibN8X1d8",
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email", "groups"],
	pkce: true,
};
