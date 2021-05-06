import { encode, decode } from "js-base64";
const key = {
  loginState: "loginState",
  authState: "authState",
  normalToken: "normaltoken",
  authToken: "authtoken",
};

// const saveLoginState = function (loginState: string) {
//   if (loginState && Object.keys(loginState).length > 0) {
//     const { token, ...staffData } = loginState;
//     sessionStorage.setItem(
//       key.loginState,
//       encode(JSON.stringify({ token, staffData }))
//     );
//   }
// };

const saveAuthToken = function (authToken: string) {
  if (authToken && Object.keys(authToken).length > 0) {
    sessionStorage.setItem(
      key.authToken,
      encode(JSON.stringify({ authToken }))
    );
  }
};

const saveNormalToken = function (normalToken: string) {
  if (normalToken && Object.keys(normalToken).length > 0) {
    sessionStorage.setItem(
      key.normalToken,
      encode(JSON.stringify({ normalToken }))
    );
  }
};

const getNormalToken = function () {
  const state = sessionStorage.getItem(key.normalToken);
  if (state) {
    return JSON.parse(decode(state));
  } else {
    return null;
  }
};

const getAuthToken = function () {
  const state = sessionStorage.getItem(key.authToken);
  if (state) {
    return JSON.parse(decode(state));
  } else {
    return null;
  }
};

const clearLoginState = function () {
  sessionStorage.removeItem(key.loginState);
};

export {
  clearLoginState,
  getAuthToken,
  getNormalToken,
  saveAuthToken,
  saveNormalToken,
};
