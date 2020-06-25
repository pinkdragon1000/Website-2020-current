import React, { Component } from "react";
import "../index.css";
import { Header, Navbar, Footer, SocialBox } from "./export-components";
import {
  headerData,
  navbarOptions,
  socialBoxOptions,
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
          socialbox={<SocialBox options={socialBoxOptions} />}
        />

        <Navbar>
          {navbarOptions.map((option, i) => (
            <div key={i} label={option.name}>
              {option.component}
            </div>
          ))}
        </Navbar>

        <Footer label={footerData} />
      </div>
    );
  }
}

export default App;
