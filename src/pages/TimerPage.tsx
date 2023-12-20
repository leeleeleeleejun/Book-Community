import Timer from "@/components/Timer";
import Nav from "@/components/common/Nav";
import MetaTag from "@/components/common/SEO/MetaTag";

const TimerPage = () => {
  return (
    <>
      <MetaTag title={`독서일기 | 기록하기`} />
      <Nav />
      <Timer />
    </>
  );
};

export default TimerPage;
