import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotPage from "./pages/NotPage";
// import Content from "./components/Content";
// import Styled from "./components/Styled";

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/*" element={<NotPage/>}/>

      </Routes>
      {/* <div className="App">
        <div className="content">
          <Content arrayNum = "0" />
          <Content arrayNum = "1" />
          <Content arrayNum = "2" />
          <Content arrayNum = "3" />
        </div>
        <Styled />
      </div> */}
    </>
  );
}

export default App;
