import { useDispatch } from "react-redux";
import CloseButton from "@/assets/CloseButton";
import { closeModal } from "./WriteMemoSlice";
import { ModalContainer } from "@/components/common/ModalContainer";
import {
  WriteMemoModalBox,
  Quill,
  modules,
  ChooseBook,
  RegisterButton,
  CancelButton,
  ButtonBox,
} from "./WriteMemo.style";

const WriteMemo = () => {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <WriteMemoModalBox>
        <button className="close" onClick={() => dispatch(closeModal())}>
          <CloseButton />
        </button>
        <h3>메모 글 작성</h3>
        <p>제목</p>
        <input type="text" />
        <ChooseBook>
          <label htmlFor="choose-book">
            <input type="checkbox" id="choose-book" />책 선택하기
          </label>
          <div>
            <span>책을 검색해 주세요</span>
            <button>검색</button>
          </div>
        </ChooseBook>
        <Quill theme="snow" modules={modules} />
        <ButtonBox>
          <RegisterButton>등록하기</RegisterButton>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </WriteMemoModalBox>
    </ModalContainer>
  );
};

export default WriteMemo;
