import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//RootState 및Redux 액션 Import:
import { RootState } from "@/store";
import {
  closeWriteGatherModal,
  setGatherId,
  setGatherClubBook,
} from "./WriteGatherSlice";
import { setTheme } from "@/components/Library/LibrarySlice";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
// 컴포넌트 Import:
import BookItem from "@/components/common/BookItem";
//SVG 아이콘 및 스타일 관련 Import:
import CloseButton from "@/assets/CloseButton.svg?react";
import { Input, RadioBox } from "./WriteGather.style";
import {
  WriteMemoModalBox,
  Quill,
  modules,
  ChooseBook,
  RegisterButton,
  CancelButton,
  ButtonBox,
  WriteMemoModalContainer,
  BookItemBox,
  Content,
} from "@/components/memo/WriteMemo/WriteMemo.style";
import { editGather, postGather } from "@/api/gatherAPI";

const WriteGather = () => {
  const dispatch = useDispatch();

  const author = useSelector((state: RootState) => state.UserSlice.userInfo);
  const gatherId = useSelector(
    (state: RootState) => state.WriteGatherSlice.gatherId
  );
  const bookInfo = useSelector(
    (state: RootState) => state.WriteGatherSlice.clubBook
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [memberLength, setMemberLength] = useState(memberLengthRange[0]);
  const [term, setTerm] = useState(termRange[0]);

  const closeModalFunc = () => {
    const bookInfo = { cover: "", title: "" };
    dispatch(setGatherClubBook(bookInfo));
    dispatch(closeWriteGatherModal());
    dispatch(setGatherId(""));
  };

  const cancelClubBookFunc = () => {
    const bookInfo = { cover: "", title: "" };
    dispatch(setGatherClubBook(bookInfo));
  };

  const writeGatherFunc = async () => {
    if (!author) return;

    if (!title) {
      alert("제목을 입력해 주세요.");
      return;
    }

    if (!description) {
      alert("소개글을 입력해 주세요.");
      return;
    }

    if (!content) {
      alert("내용을 입력해 주세요.");
      return;
    }

    const gatherInfo = {
      author,
      title,
      description,
      content,
      book_info: bookInfo,
      member_length: memberLength,
      term,
    };

    const response = gatherId
      ? await editGather(gatherInfo, gatherId)
      : await postGather(gatherInfo);

    if (response?.ok) {
      closeModalFunc();
      setTitle("");
      setDescription("");
      setContent("");
      window.location.reload();
    }
  };

  return (
    <WriteMemoModalContainer>
      <WriteMemoModalBox>
        <button className="close" onClick={closeModalFunc}>
          <CloseButton />
        </button>
        <h3>모임 모집하기</h3>
        <Content>
          <span>제목</span>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ChooseBook>
            {bookInfo.title ? (
              <BookItemBox>
                <BookItem
                  cover={bookInfo.cover}
                  title={bookInfo.title}
                  cancelFunc={cancelClubBookFunc}
                />
              </BookItemBox>
            ) : (
              <>
                <span>책을 검색해 주세요</span>
                <button
                  onClick={() => {
                    dispatch(setTheme(null));
                    dispatch(openModal());
                  }}
                >
                  검색
                </button>
              </>
            )}
          </ChooseBook>
          <span>인원</span>
          <RadioBox>
            {memberLengthRange.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="member"
                  value={item}
                  defaultChecked={memberLength === item}
                  onClick={() => {
                    setMemberLength(item);
                  }}
                />
                {item}명
              </label>
            ))}
          </RadioBox>
          <span>기간</span>
          <RadioBox>
            {termRange.map((item) => (
              <label key={item}>
                <input
                  type="radio"
                  name="day"
                  value={item}
                  defaultChecked={term === item}
                  onClick={() => {
                    setTerm(item);
                  }}
                />
                {item}일
              </label>
            ))}
          </RadioBox>
          <span>한 줄 소개</span>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span>활동 내용 및 규칙</span>
          <Quill
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
          />
          <ButtonBox>
            <RegisterButton onClick={writeGatherFunc}>
              {gatherId ? "수정" : "등록"}하기
            </RegisterButton>
            <CancelButton onClick={closeModalFunc}>취소하기</CancelButton>
          </ButtonBox>
        </Content>
      </WriteMemoModalBox>
    </WriteMemoModalContainer>
  );
};

export default WriteGather;

const memberLengthRange = Array(7)
  .fill(0)
  .map((_, i) => i + 1);
const termRange = Array(6)
  .fill(0)
  .map((_, i) => (i + 1) * 5);
