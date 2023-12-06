import { API_PATH } from "@/constants/path";
import { postBookListItemApiProp, userInfo } from "@/types";
import callApi from "@/utils/callApi";

const handleApiResponse = async (response: Response) => {
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  } else {
    alert(result.message);
  }
  return response;
};

export const signUpAPI = async (data: userInfo) => {
  try {
    const response = await fetch(API_PATH.USER.POST.USER_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await handleApiResponse(response);
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

    return await handleApiResponse(response);
  } catch (err) {
    alert(err);
  }

  return null;
};

export const getUserInfo = async () => {
  try {
    const response = await callApi("GET", API_PATH.USER.GET.USER_INFO);
    return response;
  } catch (err) {
    alert(err);
  }
};

export const pushReadTime = async (data: { day: number; active: number }) => {
  try {
    const response = await callApi(
      "PUT",
      API_PATH.USER.PUT.TIMER,
      JSON.stringify(data)
    );

    return await handleApiResponse(response);
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

    return await handleApiResponse(response);
  } catch (err) {
    alert(err);
  }
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

    return await handleApiResponse(response);
  } catch (err) {
    alert(err);
  }
};

export const deleteProfileImage = async () => {
  try {
    const response = await callApi("DELETE", API_PATH.USER.PUT.USER_IMG);

    return await handleApiResponse(response);
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

    return await handleApiResponse(response);
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

    return await handleApiResponse(response);
  } catch (err) {
    alert(err);
  }
};
