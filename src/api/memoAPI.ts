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

    return await handleApiResponse(response);
  } catch (err) {
    alert(err);
  }
};
