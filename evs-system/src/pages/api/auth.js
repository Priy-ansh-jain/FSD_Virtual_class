import axios from "axios";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../utils/apiConstant";

// Function to handle login
export const login = async (credentials) => {
  try {
    const response = await axios.post(LOGIN_ROUTE, credentials, {
      withCredentials: true, // Send cookies with the request
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// Function to handle signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(SIGNUP_ROUTE, userData, {
      withCredentials: true, // Send cookies with the request
    });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};
