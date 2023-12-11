import { API_PATH } from "@/constants/path";
import { memo } from "@/types";
import callApi from "@/utils/callApi";
import handleApiResponse from "@/utils/handleApiResponse";

export const getMemo = async (data: string) => {
  const queryString = new URLSearchParams({ param: data });
  try {
    const response = await fetch(`${API_PATH.MEMO.GET}?${queryString}`, {
      method: "GET",
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};

export const postMemo = async (data: memo) => {
  try {
    const response = await callApi(
      "POST",
      API_PATH.MEMO.POST,
      JSON.stringify(data)
    );

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const editMemo = async (data: memo, memoId: string) => {
  try {
    const response = await callApi(
      "PUT",
      API_PATH.MEMO.PUT,
      JSON.stringify({ ...data, _id: memoId })
    );

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const getAllMemo = async (data: number) => {
  const queryString = new URLSearchParams({ param: String(data) });
  try {
    const response = await fetch(`${API_PATH.ALL_MEMO.GET}?${queryString}`, {
      method: "GET",
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};

export const getUserMemo = async (data: number, userId: string) => {
  const queryString = new URLSearchParams({ param: String(data), userId });

  try {
    const response = await fetch(`${API_PATH.USER_MEMO.GET}?${queryString}`, {
      method: "GET",
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    alert(err);
  }
};
