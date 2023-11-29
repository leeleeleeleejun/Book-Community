import LibraryIcon from "@/assets/LibraryIcon";
import { Title } from "./Library.style";
import LibraryBookList from "./LibraryBookList";

const LibraryBody = () => {
  return (
    <>
      <Title>
        <LibraryIcon />
        책장
      </Title>
      <LibraryBookList />
      <LibraryBookList />
      <LibraryBookList />
    </>
  );
};

export default LibraryBody;
