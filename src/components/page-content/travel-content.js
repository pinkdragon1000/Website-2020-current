import React, { Component } from "react";

class TravelContent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="places"
          width="100%"
          height="640px"
          src="https://www.arcgis.com/apps/View/index.html?appid=4a73d707660146828bffd29123f7804f"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default TravelContent;
