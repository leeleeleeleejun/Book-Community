import { API_PATH } from "@/constants/path";
import { memo } from "@/types";
import callApi from "@/utils/callApi";
import handleApiResponse from "@/utils/handleApiResponse";

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

export const getAllMemo = async (data: number) => {
  const queryString = new URLSearchParams({ param: String(data) });
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
