export const msalConfig = {
  auth: {
    //clientId of the frontend
    clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
    authority: import.meta.env.VITE_OAUTH_ISSUER_URI,
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};
