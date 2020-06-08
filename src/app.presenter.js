import React from "react";

import GlobalStyle from "./global-style";
// antd 사용을 위한 css
import "antd/dist/antd.css";

import MainPage from "./components/pages/main-page";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
