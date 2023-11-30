const API_BASE_URL = "http://localhost:3001";

export const API_PATH = {
  USER: {
    GET: {
      USER_INFO: `${API_BASE_URL}/user`,
    },
    POST: {
      USER_SIGNUP: `${API_BASE_URL}/signup`,
      USER_LOGIN: `${API_BASE_URL}/login`,
    },
  },
};

export const CLIENT_PATH = {
  HOME: "/",
  SIGNUP: "/signup",
  MYMEMO: "/mymemo",
  MYLIBRARY: "/mylibrary",
  TIMER: "/timer",
  LIBRARY: "/library",
};
