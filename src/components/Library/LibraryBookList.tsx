import {
  BookImg,
  BookItem,
  BookListBody,
  BookListEditButton,
  BookListHeader,
  BookListTitle,
  BookTitle,
} from "./Library.style";
import PencilIcon from "@/assets/PecilIcon";

const LibraryBookList = () => {
  const array = [0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <BookListHeader>
        <BookListTitle>인생책 (11/29)</BookListTitle>
        <BookListEditButton>
          <PencilIcon />
        </BookListEditButton>
      </BookListHeader>
      <BookListBody>
        {array.map((item, index) => (
          <BookItem key={index}>
            <BookImg src="carouselImg/1.jpg" />
            <BookTitle>
              지적 대화를 위한 넓고 얕은 지식 2 - 현실 편 : 철학 / 과학 / 예술 /
              종교 / 신비
            </BookTitle>
          </BookItem>
        ))}
      </BookListBody>
    </>
  );
};

export default LibraryBookList;
