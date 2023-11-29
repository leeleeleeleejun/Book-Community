import LeftArrowIcon from "@/assets/LeftArrowIcon";
import { useNavigate, NavigateFunction } from "react-router-dom";
import styled from "styled-components";

const MemoDetailPage = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <MemoHeader>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftArrowIcon />
        </button>
        <MemoTitle>안녕하세요</MemoTitle>
        <Writer>
          <i>by</i>
          이준석
        </Writer>
        <WriteDate>2023-11-28 12:24</WriteDate>
      </MemoHeader>
      <BookBox>
        <BoolTitle>
          이제 나가서 사람 좀 만나려고요 - 어느 내향인의 집 나간 외향성을 찾아서
        </BoolTitle>
        <BookImg src="carouselImg/1.jpg" />
      </BookBox>
      <Article>
        내향인인 저자는 1년 동안 외향적으로 살아보려는 노력을 제대로 한다.
        모르는 사람에게 말을 걸고, 즉흥 연기 수업을 듣고, 데이팅 앱으로 사람을
        만나고, 스탠드업 코미디를 하고, 디너파티를 주최한다. 그 좌충우돌
        과정에서 느낀 점, 주변 사람들의 반응, 자신의 달라진 점을 상세히 적은
        것만으로도 충분히 흥미롭다. 그리고 유머 감각이 무척 뛰어나다.
      </Article>
    </>
  );
};

export default MemoDetailPage;

const MemoHeader = styled.div`
  width: 90%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
  border-bottom: 1px solid var(--color-gray-3);

  button {
    margin-left: 10px;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

const MemoTitle = styled.h3`
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);
  word-break: break-word;
  margin-bottom: 5px;
`;

const Writer = styled.span`
  font-size: var(--font-micro);
  color: var(--color-gray);
  font-weight: var(--weight-regular);
  i {
    font-style: italic;
    margin-right: 5px;
  }
`;

const WriteDate = styled.span`
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);

  color: var(--color-light-black);
`;

const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 40px;
`;

const BoolTitle = styled.h4`
  font-weight: var(--weight-semi-bold);
  text-align: center;
`;

const BookImg = styled.img`
  width: 150px;
  border-radius: 4px;
  box-shadow: 0 0 5px #0006;
  margin: 20px auto 40px;
`;

const Article = styled.article`
  width: 90%;
  margin: 0 auto;
  line-height: 1.6;
`;
