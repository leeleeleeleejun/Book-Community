import { API_PATH } from "@/constants/path";
import { gatherPost } from "@/types";
import callApi from "@/utils/callApi";
import handleApiResponse from "@/utils/handleApiResponse";

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
