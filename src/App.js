import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
       <Nav />
        <div className="content">
          <Content arrayNum = "0" />
          <Content arrayNum = "1" />
          <Content arrayNum = "2" />
          <Content arrayNum = "3" />
        </div>
      </div>
    </>
  );
}

export default App;
