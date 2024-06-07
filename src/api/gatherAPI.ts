import { API_PATH } from "@/constants/path";
import { gatherPost } from "@/types";
import callApi from "@/utils/callApi";
import handleApiResponse from "@/utils/handleApiResponse";

export const getGather = async (data: string) => {
  const queryString = new URLSearchParams({ param: data });
  try {
    const response = await fetch(`${API_PATH.GATHER.GET}?${queryString}`, {
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

export const postGather = async (data: gatherPost) => {
  try {
    const response = await callApi(
      "POST",
      API_PATH.GATHER.POST,
      JSON.stringify(data)
    );

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const editGather = async (data: gatherPost, gatherId: string) => {
  try {
    const response = await callApi(
      "PUT",
      API_PATH.GATHER.PUT,
      JSON.stringify({ ...data, _id: gatherId })
    );

    await handleApiResponse(response);

    return response;
  } catch (err) {
    alert(err);
  }
};

export const getAllGathers = async (data: number) => {
  const queryString = new URLSearchParams({ param: String(data) });
  try {
    const response = await fetch(`${API_PATH.ALL_GATHER.GET}?${queryString}`, {
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

export const getUserGathers = async (data: number, userId: string) => {
  const queryString = new URLSearchParams({ param: String(data), userId });

  try {
    const response = await fetch(`${API_PATH.USER_GATHER.GET}?${queryString}`, {
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
