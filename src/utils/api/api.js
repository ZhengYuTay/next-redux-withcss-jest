import api from "./helpers";

export const postLogin = payload => {
  return api.post("/signin", payload);
};

export const postRegister = payload => {
  return api.post("/signup", payload);
};

export const postForgot = payload => {
  return api.post("/forgotpassword", payload);
};

export const updateDetails = payload => {
  return api.put("/updatedetails", payload);
};

export const changePassword = payload => {
  return api.post("/changepassword", payload);
};

export const confirmSignup = payload => {
  return api.post("/confirmsignup", payload);
};

export const confirmForgot = payload => {
  return api.post("/confirmforgotpassword", payload);
};
