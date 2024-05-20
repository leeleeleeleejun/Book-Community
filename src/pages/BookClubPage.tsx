import { useEffect, useState } from "react";
import Nav from "@/components/common/Nav";
import UpArrow from "@/assets/UpArrow.svg?react";
import TopButton from "@/components/common/TopButton";
import showTopButton from "@/utils/showTopButton";
import PostList from "@/components/common/PostList";
import { getAllGathers, getUserGathers } from "@/api/gatherAPI";

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
      <PostList
        user={""}
        getUserPosts={getUserGathers}
        getAllPosts={getAllGathers}
        locationPath="BOOK_CLUB_GATHER"
      />
    </>
  );
};

export default BookClubPage;
