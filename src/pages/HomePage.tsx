import Nav from "@/components/common/Nav";
import MemoList from "@/components/memo/MemoList";

const HomePage = () => {
  return (
    <>
      <Nav />
      <MemoList user={""} />
    </>
  );
};

export default HomePage;
