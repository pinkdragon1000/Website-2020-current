import React, { Component } from "react";
import "../index.css";
import Header from "./header";
import Tabs from "./tabs";
import Footer from "./footer";

import {
  headerData,
  navbarOptions,
  navbarComponentOptions,
  footerData,
} from "../utils/app-utils";

class App extends Component {
  render() {
    return (
      <div>
        <Header
          imgdir={headerData.imgdir}
          header={headerData.header}
          subheader={headerData.subheader}
        />

        <Tabs>
          {navbarOptions.map((option, i) => (
            <div key={i} label={option}>
              {navbarComponentOptions[i]}
            </div>
          ))}
        </Tabs>

        <Footer label={footerData} />
      </div>
    );
  }
}

export default App;
