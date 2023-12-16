import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userInfo } from "@/types";
import { RootState } from "@/store";
import { getAnotherUserInfo } from "@/api/userAPI";
import LibraryBody from "@/components/Library/LibraryBody";
import LibraryHeader from "@/components/Library/LibraryHeader";

const LibraryPage = () => {
  const { userId } = useParams();
  const loginUser = useSelector((state: RootState) => state.UserSlice.userInfo);
  const [targetUser, setTargetUser] = useState<userInfo | null>(null);
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    (async () => {
      if (userId !== loginUser?._id) {
        const response = await getAnotherUserInfo(userId || "");
        if (response) {
          const result = await response.json();
          setTargetUser(result.user);
        }
      } else {
        setAuthUser(true);
        setTargetUser(loginUser);
      }
    })();
  }, [userId, loginUser]);

  return (
    <>
      <LibraryHeader targetUser={targetUser} />
      <LibraryBody targetUser={targetUser} authUser={authUser} />
    </>
  );
};

export default LibraryPage;
