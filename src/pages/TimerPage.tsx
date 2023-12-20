import Timer from "@/components/Timer";
import Nav from "@/components/common/Nav";
import MetaTag from "@/components/common/SEO/MetaTag";

const TimerPage = () => {
  return (
    <>
      <MetaTag
        title={`독서일기 | 기록하기`}
        content="독서 습관을 꾸준히 함께 관리해요"
      />
      <Nav />
      <Timer />
    </>
  );
};

export default TimerPage;
