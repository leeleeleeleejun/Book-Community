import { useEffect, useState } from "react";
import Nav from "@/components/common/Nav";
import UpArrow from "@/assets/UpArrow.svg?react";
import TopButton from "@/components/common/TopButton";
import showTopButton from "@/utils/showTopButton";

const BookClubPage = () => {
  const [position, setPosition] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(showTopButton(position, setPosition, setVisible), [position]);

  return (
    <>
      <TopButton
        $visible={visible}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <UpArrow />
      </TopButton>
      <Nav />
    </>
  );
};

export default BookClubPage;
