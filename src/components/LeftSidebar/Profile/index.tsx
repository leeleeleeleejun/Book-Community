import { useSelector } from "react-redux";
import { UserBox, UserImg, UserName } from "./Profile.style";
import type { RootState } from "@/store";
import BasicUserIcon from "@/components/common/BasicUserIcon";

const Profile = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  return (
    <UserBox>
      {user?.profile ? (
        <UserImg alt="UserImg" src="../../../public/logo.jpg" />
      ) : (
        <BasicUserIcon size={70} />
      )}
      <UserName>
        <div>📖 안녕하세요! 📖</div>
        <div> {user?.nickname} 님</div>
        <div>즐거운 독서되세요!</div>
      </UserName>
    </UserBox>
  );
};

export default Profile;
