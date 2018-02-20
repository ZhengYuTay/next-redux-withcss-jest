import axios from "axios";
import Cookie from "js-cookie";

const apiEndpoint = "http://someapi.com/";

const api = axios.create({
  baseURL: apiEndpoint,
  headers: {
    "Content-Type": "application/json",
    "Access-Token": Cookie.get("X-Access-Token") || ""
  },
  withCredentials: true
});

export const customError = (code = "500", errMsg = "Custom Error") => {
  const err = new Error(errMsg);
  err.code = code;
  return err;
};

api.interceptors.response.use(
  response => response,
  error => {
    // This middleware only check for invalid token error code and will reset error.message to empty string so other know this has been handle.
    // This middleware will set the error.message for other error.response.data.error.code so frontend can use error.message to display error message
    // This added logic api call in component to check for error.message before display the notification so there is no duplication
    // if (message === '') do not call notification as this is being handled here
    // This middleware SHOULD always set message if it is not being handled
    if (error.response) {
      if (error.response.data && error.response.data.error) {
        error.message = error.response.data.error.message;
        return Promise.reject(error.response.data.error);
      } else if (error.response.data && error.response.data.validationError) {
        return Promise.reject(error.response.data);
      } else {
        return Promise.reject(error);
      }
    } else if (error.request) {
      return Promise.reject(customError("599", "Network Error"));
    } else {
      return Promise.reject(
        customError("500", "Unexpected error when initiate api call")
      );
    }
  }
);

export default api;
