import FirstRequest from "./components/1-first-request";
import Headers from "./components/2-headers";
import PostRequest from "./components/3-post-request";
import GlobalInstance from "./components/4-global-instance";
// import "./axios/global"; Only required if you are going with the Global Approach
import CustomInstance from "./components/5-custom-instance";
import Interceptors from "./components/6-interceptors";

function App() {
  return (
    <>
      {/* <FirstRequest /> */}
      {/* <Headers /> */}
      {/* <PostRequest/> */}
      {/* <GlobalInstance/> */}
      {/* <CustomInstance/> */}
      <Interceptors/>
    </>
  )
}

export default App;
