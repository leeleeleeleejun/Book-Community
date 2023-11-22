import { UserBox, UserImg, UserName } from "./ProfileStyle";

const Profile = () => {
  return (
    <UserBox>
      <UserImg alt="UserImg" src="../../../public/logo.jpg" />
      <UserName>
        <div>📖 안녕하세요! 📖</div>
        <div> 이준석 님</div>
        <div>즐거운 독서되세요!</div>
      </UserName>
    </UserBox>
  );
};

export default Profile;
