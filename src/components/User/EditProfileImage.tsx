import { ChangeEvent, useState } from "react";
import {
  ProfileEditor,
  ProfileImageSection,
  ProfileImageButton,
  ImgFile,
  BasicUserIconWrap,
} from "./EditUser.style";
import BasicUserIcon from "../common/BasicUserIcon";
import { editProfileImage, deleteProfileImage } from "@/api/userAPI";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { API_USER_IMG } from "@/constants/path";

const EditProfileImage = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const [userProfile, setUserProfile] = useState<File | null>(null);
  const [viewProfileImg, setViewProfileImg] = useState<
    string | null | undefined
  >(API_USER_IMG + user?.profile);

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUserProfile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setViewProfileImg(reader.result as string);
      };
      reader.onerror = () => {
        throw new Error("file reading error");
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = () => {
    setViewProfileImg(null);
    setUserProfile(null);
  };

  const setProfileImageFunc = async () => {
    const response = userProfile
      ? await editProfileImage(userProfile)
      : await deleteProfileImage();

    if (response?.ok) {
      window.location.reload();
    }
  };

  return (
    <ProfileEditor>
      <ProfileImageSection>
        {viewProfileImg && viewProfileImg.length > 80 ? (
          <img src={viewProfileImg} alt="프로필 이미지" />
        ) : (
          <BasicUserIconWrap>
            <BasicUserIcon size={100} />
          </BasicUserIconWrap>
        )}
        <div>
          <ProfileImageButton $isChange={false}>
            <label htmlFor="file">프로필 선택</label>
            <ImgFile
              type="file"
              onChange={fileHandler}
              id="file"
              accept="image/jpeg, image/png"
              name="profile"
            />
          </ProfileImageButton>
          <ProfileImageButton $isChange={false} onClick={deleteImage}>
            기본이미지
          </ProfileImageButton>
          <ProfileImageButton $isChange={true} onClick={setProfileImageFunc}>
            변경
          </ProfileImageButton>
        </div>
      </ProfileImageSection>
    </ProfileEditor>
  );
};
export default EditProfileImage;
