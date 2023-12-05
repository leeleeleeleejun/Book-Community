import { API_PATH } from "@/constants/path";
import { postBookListItemApiProp, userInfo } from "@/types";
import callApi from "@/utils/callApi";

export const signUpAPI = async (data: userInfo) => {
  try {
    const response = await fetch(API_PATH.USER.POST.USER_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (err) {
    alert(err);
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await fetch(API_PATH.USER.POST.USER_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    alert(err);
  }

  return null;
};

export const getUserInfo = async () => {
  const response = await callApi("GET", API_PATH.USER.GET.USER_INFO);
  return response;
};

export const pushReadTime = async (data: { day: number; active: number }) => {
  try {
    const response = await callApi(
      "PUT",
      API_PATH.USER.PUT.TIMER,
      JSON.stringify(data)
    );
    return response;
  } catch (err) {
    alert(err);
  }
};

export const editUserInfoAPI = async (data: userInfo) => {
  try {
    const response = await callApi(
      "PUT",
      API_PATH.USER.PUT.USER_INFO,
      JSON.stringify(data)
    );
    return response;
  } catch (err) {
    alert(err);
  }
};

export const deleteProfileImage = async () => {
  const response = await callApi("DELETE", API_PATH.USER.PUT.USER_IMG);
  return response;
};

export const editProfileImage = async (data: File) => {
  try {
    const formData = new FormData();
    formData.append("profile", data);

    const response = await fetch(API_PATH.USER.PUT.USER_IMG, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    // 서버 응답 상태가 400 이상이면 에러 처리
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`서버 응답 오류: ${response.status} - ${errorMessage}`);
      throw new Error(`서버 응답 오류: ${response.status} - ${errorMessage}`);
    }
    return response;
  } catch (err) {
    alert(err);
  }
};

export const pushMyBookListItem = async (data: postBookListItemApiProp) => {
  try {
    const response = await callApi(
      "POST",
      API_PATH.USER.POST.USER_LIBRARY,
      JSON.stringify(data)
    );
    return response;
  } catch (err) {
    alert(err);
  }
};

export const deleteMyBookListItem = async (data: postBookListItemApiProp) => {
  try {
    const response = await callApi(
      "DELETE",
      API_PATH.USER.POST.USER_LIBRARY,
      JSON.stringify(data)
    );
    return response;
  } catch (err) {
    alert(err);
  }
};
