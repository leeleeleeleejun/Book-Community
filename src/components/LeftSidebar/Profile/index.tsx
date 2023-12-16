import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { API_USER_IMG } from "@/constants/path";
import { UserBox, UserImg, UserName } from "./Profile.style";
import BasicUserIcon from "@/components/common/BasicUserIcon";

const Profile = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  if (!user) return null;

  return (
    <UserBox>
      {user && user.profile.length > 30 ? (
        <UserImg alt="UserImg" src={API_USER_IMG + user.profile} />
      ) : (
        <BasicUserIcon size={70} />
      )}
      <UserName>
        <div>📖 안녕하세요! 📖</div>
        <div> {user.nickname} 님</div>
        <div>즐거운 독서되세요!</div>
      </UserName>
    </UserBox>
  );
};

export default Profile;
