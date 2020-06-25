import React, { Component } from "react";
import "../index.css";
import Header from "./reusable-components/header";
import Navbar from "./reusable-components/navbar";
import Footer from "./reusable-components/footer";

import {
  headerData,
  navbarOptions,
  navbarComponentOptions,
  socialBoxOptions,
  footerData,
} from "../utils/app-utils";
import SocialBox from "./reusable-components/social-box";

class App extends Component {
  render() {
    return (
      <div>
        <Header
          imgdir={headerData.imgdir}
          header={headerData.header}
          subheader={headerData.subheader}
          socialbox={<SocialBox options={socialBoxOptions} />}
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
