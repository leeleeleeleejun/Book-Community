import { API_PATH } from "@/constants/path";
import { userInfo } from "@/types";
// import callApi from "@/utils/callApi";

export const postUser = async (data: userInfo) => {
  try {
    const response = await fetch(API_PATH.USER.POST.USER_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("회원가입 성공");
    } else {
      // 서버 응답이 오류(4xx, 5xx)인 경우
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return response.ok;
  } catch (err) {
    alert(err);
  }
};
