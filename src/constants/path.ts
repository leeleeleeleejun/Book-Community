const API_BASE_URL = "http://localhost:3001";

export const API_PATH = {
  USER: {
    POST: {
      USER_SIGNUP: `${API_BASE_URL}/signup`,
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
