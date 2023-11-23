import { useEffect, useState } from "react";
import { ImgBox, Img, TextBox } from "./SidebarCarouselStyle";

const array = [
  [
    "반박하거나 오류를 찾아내려고 책을 읽지 말고 이야기와 담화를 찾아내려고도 읽지 말며 단지 숙고하고 고려하기 위하여 읽으라.",
    "Sir Francis Bacon",
  ],
  [
    "배움에 대한 애정과 세상을 등진 외딴 곳.\n책이 주는 그 모든 달콤한 평온",
    "Henry Wadsworth Longfellow",
  ],
  [
    "한 문장이라도 매일 조금씩 읽기로 결심하라.\n하루 15분씩 시간을 내면 연말에는 변화가 느껴질 것이다.",
    "Horace Mann",
  ],
  [
    "사람들은 인생이 모든 것이라고 말하지만\n나는 독서가 좋다.",
    "Logan Pearsall Smith",
  ],
  [
    "가장 발전한 문명사회에서도 책은 최고의 기쁨을 준다.\n독서의 기쁨을 아는 자는 재난에 맞설 방편을 얻은 것이다.",
    "Ralph Waldo Emerson",
  ],
  [
    "긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다.",
    "Kathleen Norris",
  ],
  [
    "책 한 권 읽기를 간절히 바라는 사람과 읽을 만한 책을 기다리다 지친 사람 사이에는 매우 큰 차이가 있다.",
    "G. K. Chesterton",
  ],
];

const Carousel = () => {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);

  const nextBtn = () => {
    setVisible(false);

    setTimeout(() => {
      setCount((count) => (count < 6 ? count + 1 : 1));
      setVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBtn();
    }, 6000);

    return () => {
      clearTimeout(interval);
    };
  }, [count]);

  return (
    <>
      <ImgBox>
        <Img src={`carouselImg/${count}.jpg`} $visible={visible} />
      </ImgBox>
      <TextBox>
        <pre>{array[count - 1][0]}</pre>
        <p>- {array[count - 1][1]} -</p>
      </TextBox>
    </>
  );
};

export default Carousel;
