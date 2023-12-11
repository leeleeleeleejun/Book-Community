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
    PUT: `${API_BASE_URL}/memo`,
    DELETE: `${API_BASE_URL}/memo`,
  },

  ALL_MEMO: {
    GET: `${API_BASE_URL}/memos`,
  },
  USER_MEMO: {
    GET: `${API_BASE_URL}/memo/user`,
  },
};

export const CLIENT_PATH = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  MY_MEMO: "/mymemo",
  TIMER: "/timer",
  LIBRARY: "/library",

  MEMO: "/memo/:_id",
};
