import { API_PATH } from "@/constants/path";
import callApi from "@/utils/callApi";

export const searchAPI = async (data: string) => {
  try {
    const queryString = new URLSearchParams({ param: data });
    const response = await callApi(
      "GET",
      `${API_PATH.BOOK.GET}?${queryString}`
    );

    if (response.ok) {
      const result = await response.json();
      const correctedJSON = result.replace(/\\/g, "").slice(0, -1);
      const parsedData = JSON.parse(correctedJSON);
      return parsedData.item;
    } else {
      // 서버 응답이 오류(4xx, 5xx)인 경우
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (err) {
    console.log(err);
  }
};
