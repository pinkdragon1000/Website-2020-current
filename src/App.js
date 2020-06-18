import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import "./index.css";

import Header from "./components/header";
import WelcomeContent from "./components/page-content/welcome-content";
function App() {
  return (
    <div className="App">
      <Header
        imgdir="../me.png"
        header="Sita Robinson"
        subheader="Software Developer"
      />

      <Navbar />

      <Card>
        <WelcomeContent />
      </Card>

      <div className="footer">Ⓒ Sita Robinson 2020</div>
    </div>
  );
}

export default App;
