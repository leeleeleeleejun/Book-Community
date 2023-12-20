import Router from "@/Router";
import GlobalStyle from "@/styles/GlobalStyle";
import MetaTag from "@/components/common/SEO/MetaTag";

function App() {
  return (
    <div className="app">
      <MetaTag title="독서일기" url="https://book-diary-pro.vercel.app/" />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
