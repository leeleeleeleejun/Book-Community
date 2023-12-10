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
      USER_LIBRARY: `${API_BASE_URL}/library`,
    },
    PUT: {
      TIMER: `${API_BASE_URL}/readtime`,
      USER_INFO: `${API_BASE_URL}/user`,
      USER_IMG: `${API_BASE_URL}/userimg`,
    },
  },

  BOOK: {
    GET: `${API_BASE_URL}/searchbook`,
  },

  MEMO: {
    GET: `${API_BASE_URL}/memo`,
    POST: `${API_BASE_URL}/memo`,
  },

  ALL_MEMO: {
    GET: `${API_BASE_URL}/memos`,
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

  MEMO: "/memo/:_id",
};
