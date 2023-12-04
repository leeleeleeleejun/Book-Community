const API_BASE_URL = "http://localhost:3001";
export const API_USER_IMG = `${API_BASE_URL}/userimg/`;

export const API_PATH = {
  USER: {
    GET: {
      USER_INFO: `${API_BASE_URL}/user`,
    },
    POST: {
      USER_SIGNUP: `${API_BASE_URL}/signup`,
      USER_LOGIN: `${API_BASE_URL}/login`,
    },
    PUT: {
      TIMER: `${API_BASE_URL}/readtime`,
      USER_INFO: `${API_BASE_URL}/user`,
      USER_IMG: `${API_BASE_URL}/userimg`,
    },
  },
};

export const CLIENT_PATH = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  MYMEMO: "/mymemo",
  MYLIBRARY: "/mylibrary",
  TIMER: "/timer",
  LIBRARY: "/library",
};
