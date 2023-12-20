import Router from "@/Router";
import GlobalStyle from "@/styles/GlobalStyle";
import MetaTag from "@/components/common/SEO/MetaTag";

function App() {
  return (
    <div className="app">
      <MetaTag
        title="독서일기"
        url="https://book-diary-pro.vercel.app/"
        content="독서의 즐거움을 함께 나누고 지식을 공유하는 공동체입니다"
      />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
