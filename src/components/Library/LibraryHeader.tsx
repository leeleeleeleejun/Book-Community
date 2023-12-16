import { userInfo } from "@/types";
import { API_USER_IMG } from "@/constants/path";
import { LibraryHeaderBox, UserImg } from "./Library.style";
import BasicUserIcon from "@/components/common/BasicUserIcon";

const LibraryHeader = ({ targetUser }: { targetUser: userInfo | null }) => {
  if (!targetUser) return;
  return (
    <LibraryHeaderBox>
      {targetUser.profile.length > 30 ? (
        <UserImg alt="UserImg" src={API_USER_IMG + targetUser.profile} />
      ) : (
        <BasicUserIcon size={45} />
      )}
      <p>{targetUser.nickname} 님의 서재</p>
    </LibraryHeaderBox>
  );
};

export default LibraryHeader;
