import React, { Component } from "react";
import "../index.css";
import Header from "./header";
import Tabs from "./tabs";
import Footer from "./footer";

import { navbarOptions, navbarComponentOptions } from "../utils/app-utils";

class App extends Component {
  render() {
    return (
      <div>
        <Header
          imgdir="../me.png"
          header="Sita Robinson"
          subheader="Software Developer"
        />

        <Tabs>
          {navbarOptions.map((option, i) => (
            <div key={i} label={option}>
              {navbarComponentOptions[i]}
            </div>
          ))}
        </Tabs>

        <Footer label="Ⓒ Sita Robinson 2020" />
      </div>
    );
  }
}

export default App;
