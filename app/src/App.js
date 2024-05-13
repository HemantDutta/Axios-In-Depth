import FirstRequest from "./components/1-first-request";
import Headers from "./components/2-headers";
import PostRequest from "./components/3-post-request";
import GlobalInstance from "./components/4-global-instance";
import "./axios/global";

function App() {
  return (
    <>
      <FirstRequest />
      <Headers />
      <PostRequest/>
      <GlobalInstance/>
    </>
  )
}

export default App;
