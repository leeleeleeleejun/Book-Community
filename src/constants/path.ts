const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_USER_IMG = import.meta.env.VITE_API_IMG_URL;

export const API_PATH = {
  USER: {
    GET: {
      USER_INFO: `${API_BASE_URL}/user`,
      ANOTHER_USER_INFO: `${API_BASE_URL}/anotheruser`,
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
    DELETE: {
      USER_INFO: `${API_BASE_URL}/user`,
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
  BOOK_CLUB: "/bookclub",
  BOOK_CLUB_GATHER: "/bookclub/gather/:id",
  LOGIN: "/login",
  SIGNUP: "/signup",
  USER_MEMO: "/user/memo/:userId",
  TIMER: "/timer",
  LIBRARY: "/user/library/:userId",
  USER_BOOK_CLUB: "/user/bookclub/:userId",
  MEMO: "/memo/:_id",
};
