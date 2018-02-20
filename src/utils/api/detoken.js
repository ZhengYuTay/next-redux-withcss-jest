import Cookie from "js-cookie";

export const getIDToken = () => {
  let idToken = Cookie.get("X-Id-Token");
  if (idToken) {
    idToken = JSON.parse(
      Buffer.from(idToken.split(".")[1], "base64").toString() //eslint-disable-line
    );
  }
  return idToken;
};
