import { ChangeEvent, useState } from "react";
import {
  ProfileEditor,
  ProfileImageSection,
  ProfileImageButton,
  ImgFile,
} from "./EditUser.style";

const EditProfileImage = () => {
  const [userProfile, setUserProfile] = useState<string | null>(null);

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserProfile(reader.result as string);
      };
      reader.onerror = () => {
        throw new Error("file reading error");
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setUserProfile("");
  };

  return (
    <ProfileEditor>
      <h3>회원정보 수정</h3>
      <p>프로필과 정보를 변경할 수 있습니다.</p>
      <ProfileImageSection>
        <img src={userProfile || "carouselImg/1.jpg"} alt="프로필 이미지" />
        <div>
          <ProfileImageButton $isChange={false}>
            <label htmlFor="file">프로필 선택</label>
            <ImgFile
              type="file"
              onChange={fileHandler}
              id="file"
              accept="image/jpeg, image/png"
            />
          </ProfileImageButton>
          <ProfileImageButton $isChange={false} onClick={deleteImage}>
            기본이미지
          </ProfileImageButton>
          <ProfileImageButton $isChange={true} onClick={deleteImage}>
            변경
          </ProfileImageButton>
        </div>
      </ProfileImageSection>
    </ProfileEditor>
  );
};
export default EditProfileImage;
