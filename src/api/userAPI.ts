import { API_PATH } from "@/constants/path";
import { postBookListItemApiProp, userInfo } from "@/types";
import callApi from "@/utils/callApi";
import handleApiResponse from "@/utils/handleApiResponse";

export const signUpAPI = async (data: userInfo) => {
  try {
    const response = await fetch(API_PATH.USER.POST.USER_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await handleApiResponse(response);

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

    const result = await handleApiResponse(response);
    if (result.token) {
      localStorage.setItem("token", result.token);
    }

    return response;
  } catch (err) {
    alert(err);
  }

  return null;
};

export const getAnotherUserInfo = async (data: string) => {
  const queryString = new URLSearchParams({ param: data });
  try {
    const response = await callApi(
      "GET",
      `${API_PATH.USER.GET.ANOTHER_USER_INFO}?${queryString}`
    );
    return response;
  } catch (err) {
    alert(err);
  }
};

export const getUserInfo = async () => {
  try {
    const response = await callApi("GET", API_PATH.USER.GET.USER_INFO);
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

    await handleApiResponse(response);

    return response;
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

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const deleteProfileImage = async () => {
  try {
    const response = await callApi("DELETE", API_PATH.USER.PUT.USER_IMG);

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const deleteUser = async (data: string) => {
  try {
    const response = await callApi(
      "DELETE",
      API_PATH.USER.DELETE.USER_INFO,
      JSON.stringify({ _id: data })
    );

    await handleApiResponse(response);

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

    await handleApiResponse(response);

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

    await handleApiResponse(response);

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

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};
