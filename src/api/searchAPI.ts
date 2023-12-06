import { API_PATH } from "@/constants/path";
import callApi from "@/utils/callApi";

export const searchAPI = async (data: string) => {
  try {
    const queryString = new URLSearchParams({ param: data });
    const response = await callApi(
      "GET",
      `${API_PATH.BOOK.GET}?${queryString}`
    );

    const result = await response.json();
    if (response.ok) {
      const correctedJSON = result.replace(/\\/g, "").slice(0, -1);
      const parsedData = JSON.parse(correctedJSON);
      return parsedData.item;
    } else {
      throw new Error(result.error);
    }
  } catch (err) {
    alert(err);
  }
};
