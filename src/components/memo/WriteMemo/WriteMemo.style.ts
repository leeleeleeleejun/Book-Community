import { styled } from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormButton from "@/components/common/FormButton";
import { ModalBox, ModalContainer } from "@/components/common/ModalContainer";

export const WriteMemoModalContainer = styled(ModalContainer)`
  z-index: 9;
`;

export const WriteMemoModalBox = styled(ModalBox)`
  h3 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
  }

  & > p {
    font-size: var(--font-small);
    font-weight: var(--weight-light);
    margin: 30px 0 8px;
  }
`;

export const TitleInput = styled.input`
  height: 25px;
  border-radius: 4px;
  border: 1px solid var(--color-gray-2);
`;

export const CheckBoxWrap = styled.label`
  font-size: var(--font-semi-small);
  margin: 10px 0;

  input {
    margin-right: 5px;
  }
`;

export const ChooseBook = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-semi-small);

  padding: 25px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--color-gray-light);
  border-radius: 5px;

  & > button {
    width: 50px;
    background-color: white;
    border-radius: 2px;
    padding: 3px;
    margin: 15px auto 0;
    border: 1px solid var(--color-gray);
  }
`;

export const BookItemBox = styled.span`
  margin: auto;
  width: 98px;
`;

export const ButtonBox = styled.div`
  display: flex;
`;
export const RegisterButton = styled(FormButton)``;
export const CancelButton = styled(FormButton)`
  background-color: var(--color-gray);
`;

export const Quill = styled(ReactQuill)`
  height: 250px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 70px;
  @media (max-width: 500px) {
    margin-bottom: 100px;
  }
`;

export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
        { background: [] },
      ],
      ["clean"],
    ],
  },
};
