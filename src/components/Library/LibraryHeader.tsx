import { useSelector } from "react-redux";
import { LibraryHeaderBox, UserImg } from "./Library.style";
import { RootState } from "@/store";
import BasicUserIcon from "@/components/common/BasicUserIcon";
import { API_USER_IMG } from "@/constants/path";

const LibraryHeader = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  if (!user) return;
  return (
    <LibraryHeaderBox>
      {user && user.profile.length > 30 ? (
        <UserImg alt="UserImg" src={API_USER_IMG + user.profile} />
      ) : (
        <BasicUserIcon size={45} />
      )}
      <p>{user.nickname} 님의 서재</p>
    </LibraryHeaderBox>
  );
};

export default LibraryHeader;
