import { useEffect, useMemo, useRef, useState } from "react";
// 유틸리티 Import:
import getDateFunc from "@/utils/getDate";
//타입 및 상수 Import:
import { postListProp, posts } from "@/types";
import { API_USER_IMG, CLIENT_PATH } from "@/constants/path";
//로딩 아이콘 및 API 호출 관련 Import:
import LoadingIcon from "@/components/common/LoadingIcon";
//import { getAllMemos, getUserMemos } from "@/api/memoAPI";
//컴포넌트 Import:
import BasicUserIcon from "@/components/common/BasicUserIcon";
//SVG 아이콘 및 스타일 관련 Import:
import CalendalIcon from "@/assets/CalendarIcon.svg?react";
import {
  PostListBox,
  PostListItem,
  PostTitle,
  Excerpt,
  LogoImg,
  BookImg,
  WriterNicName,
  WriterImg,
  WriteDate,
  WriterInfo,
  PostInfo,
} from "./PostList.style";
import UserLinkBox from "@/components/common/PostList/UserLinkBox";

const PostList = ({
  user,
  getUserPosts,
  getAllPosts,
  locationPath,
}: postListProp) => {
  const [postList, setPostList] = useState<posts>([]);
  const [page, setPage] = useState(0); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false);
  const [showLinkBox, setShowLinkBox] = useState<number | null>();

  const io = useMemo(() => observer(setPage), []);
  const pageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPins(page, getUserPosts, getAllPosts, setPostList, setLoading, user);
  }, [page]);

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      if (pageEnd.current !== null) {
        //옵져버 탐색 시작
        io.observe(pageEnd.current);
      }
    }
  }, [loading]);

  const setShowLinkBoxFunc = (itemNumber: number) => {
    if (showLinkBox === itemNumber) setShowLinkBox(null);
    else setShowLinkBox(itemNumber);
  };

  return (
    <PostListBox>
      {postList.map((item, index) => {
        const { _id, title, author, description, createdAt, book_info } = item;
        return (
          <li key={index}>
            <PostListItem
              to={_id ? CLIENT_PATH[locationPath].replace(":_id", _id) : "/"}
            >
              <div>
                <PostTitle>{title}</PostTitle>
                <PostInfo>
                  <WriterInfo>
                    {author && author.profile ? (
                      <WriterImg
                        alt="UserImg"
                        src={API_USER_IMG + author.profile}
                      />
                    ) : (
                      <BasicUserIcon size={25} />
                    )}
                    <WriterNicName
                      onClick={(e) => {
                        e.preventDefault();
                        setShowLinkBoxFunc(index);
                      }}
                    >
                      <span>{(author && author.nickname) || "user"}</span>
                      <UserLinkBox
                        userId={(author && author._id) || ""}
                        showLinkBox={showLinkBox === index}
                      />
                    </WriterNicName>
                  </WriterInfo>
                  <WriteDate>
                    <CalendalIcon />
                    {createdAt && getDateFunc(createdAt).slice(0, 10)}
                  </WriteDate>
                </PostInfo>
                <Excerpt>
                  <p>{description}</p>
                </Excerpt>
              </div>
              {book_info?.cover ? (
                <BookImg src={book_info?.cover} alt={book_info.title} />
              ) : (
                <LogoImg src="/logo_2.jpg" alt="logo" />
              )}
            </PostListItem>
          </li>
        );
      })}
      <div ref={pageEnd} />
      {loading && <LoadingIcon />}
    </PostListBox>
  );
};

export default PostList;

const fetchPins = async (
  page: number,
  getUserPosts: (
    data: number,
    userId: string
  ) => Promise<{ posts: posts; message: string }>,
  getAllPosts: (data: number) => Promise<{ posts: posts; message: string }>,
  setPostList: React.Dispatch<React.SetStateAction<posts>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  user: string
) => {
  setLoading(true);
  const response = user
    ? await getUserPosts(page, user)
    : await getAllPosts(page);
  const newList = response.posts;
  setPostList((prev) => [...prev, ...newList]);
  setLoading(false);
};

const observer = (setPage: React.Dispatch<React.SetStateAction<number>>) => {
  return new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      }
    },
    { threshold: 1 }
  );
};
