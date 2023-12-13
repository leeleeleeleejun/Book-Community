import LibraryIcon from "@/assets/LibraryIcon";
import { Title } from "./Library.style";
import LibraryBookList from "./LibraryBookList";
import { userInfo } from "@/types";

const LibraryBody = ({
  targetUser,
  authUser,
}: {
  targetUser: userInfo | null;
  authUser: boolean;
}) => {
  return (
    <>
      <Title>
        <LibraryIcon />
        책장
      </Title>
      <LibraryBookList
        theme="bestBook"
        targetUser={targetUser}
        authUser={authUser}
      />
      <LibraryBookList
        theme="readBook"
        targetUser={targetUser}
        authUser={authUser}
      />
      <LibraryBookList
        theme="hopeBook"
        targetUser={targetUser}
        authUser={authUser}
      />
    </>
  );
};

export default LibraryBody;
