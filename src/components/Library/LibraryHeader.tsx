import { LibraryHeaderBox, UserImg } from "./Library.style";

const LibraryHeader = () => {
  return (
    <LibraryHeaderBox>
      <UserImg src="carouselImg/1.jpg" />
      <p>
        <span>이준석</span> 님의 서재
      </p>
    </LibraryHeaderBox>
  );
};

export default LibraryHeader;
