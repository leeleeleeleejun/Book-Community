import CalendalIcon from "@/assets/CalendarIcon";
import {
  MemoListBox,
  MemoListItem,
  MemoTitle,
  Excerpt,
  BookImg,
  WriterNicName,
  WriterImg,
  WriteDate,
  WriterInfo,
  MemoInfo,
} from "./MomoListStyle";

const MemoList = () => {
  const a = [0, 0, 0, 0, 0, 0];
  return (
    <MemoListBox>
      {a.map((item, index) => (
        <MemoListItem key={index}>
          <div>
            <MemoTitle>안녕하세요</MemoTitle>
            <MemoInfo>
              <WriterInfo>
                <WriterImg src="carouselImg/1.jpg" />
                <WriterNicName>이준석</WriterNicName>
              </WriterInfo>
              <WriteDate>
                <CalendalIcon /> 2023-11-21
              </WriteDate>
            </MemoInfo>
            <Excerpt>
              <p>
                임지호이쯤에서 (2)에 대한 제 생각으로 이어질 수 있을 것
                같습니다. 우리나라에서 교육은 가장 중요한 가치 중 하나입니다.
                어쩌면 조선 시대의 과거 제도부터 내려온 전통이자 문화적 유산일
              </p>
            </Excerpt>
          </div>
          <BookImg src="carouselImg/1.jpg" />
        </MemoListItem>
      ))}
    </MemoListBox>
  );
};

export default MemoList;
