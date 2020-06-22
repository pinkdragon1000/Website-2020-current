import React, { Component } from "react";
import "../index.css";
import Header from "./reusable-components/header";
import Navbar from "./reusable-components/navbar";
import Footer from "./reusable-components/footer";

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

        <Navbar>
          {navbarOptions.map((option, i) => (
            <div key={i} label={option}>
              {navbarComponentOptions[i]}
            </div>
          ))}
        </Navbar>

        <Footer label={footerData} />
      </div>
    );
  }
}

export default App;
