import React from "react";
import Style from "style-it";

class TravelContent extends React.Component {
  render() {
    const styles = `
    iframe {
        width: 80%;
        display: block;
        margin: auto;
    }
    `;
    return Style.it(
      `${styles}`,
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
