import React from "react";
import Style from "style-it";

class Icon extends React.Component {
  getViewBox() {
    switch (this.props.name) {
      case "envelope":
        return "0 0 377 278";
      case "github":
        return "0 0 305 278";
      case "linkedin":
        return "0 0 321 278";
      default:
        return "0 0 24 24";
    }
  }

  getPath() {
    switch (this.props.name) {
      case "envelope":
        return (
          <path
            d="M341.656 0H35.3438C15.8237 0 0 15.5579 0 34.75V243.25C0 262.442 15.8237 278 35.3438 278H341.656C361.176 278 377 262.442 377 243.25V34.75C377 15.5579 361.176 0 341.656 0ZM341.656 34.75V64.2911C325.146 77.5099 298.826 98.0645 242.556 141.385C230.156 150.976 205.592 174.016 188.5 173.747C171.411 174.019 146.839 150.972 134.444 141.385C78.1833 98.071 51.8559 77.512 35.3438 64.2911V34.75H341.656ZM35.3438 243.25V108.882C52.216 122.095 76.143 140.636 112.613 168.714C128.706 181.17 156.891 208.666 188.5 208.499C219.954 208.666 247.781 181.569 264.381 168.72C300.85 140.643 324.783 122.096 341.656 108.883V243.25H35.3438Z"
            {...this.props}
          />
        );

      case "linkedin":
        return (
          <path
            d="M71.8507 278H5.30105V92.3978H71.8507V278V278ZM38.5401 67.0799C17.2642 67.0799 0 51.8147 0 33.3848C0 14.9549 17.2642 0 38.5401 0C59.8159 0 77.0801 14.9549 77.0801 33.3848C77.0801 51.8147 59.8159 67.0799 38.5401 67.0799ZM320.928 278H254.522V187.65C254.522 166.117 254.021 138.504 219.922 138.504C185.322 138.504 180.021 161.898 180.021 186.099V278H113.543V92.3978H177.37V117.716H178.301C187.184 103.133 208.89 87.7437 241.269 87.7437C308.607 87.7437 321 126.155 321 176.046V278H320.928Z"
            {...this.props}
          />
        );

      case "github":
        return (
          <path
            d="M98.8175 225.415H98.7963L98.7752 225.416C97.8389 225.496 97.0914 225.319 96.5968 225.015C96.112 224.716 95.874 224.305 95.874 223.845C95.874 223.494 96.0896 223.114 96.576 222.799C97.0591 222.486 97.7605 222.276 98.5716 222.276H98.5949L98.6181 222.274C99.451 222.196 100.203 222.368 100.73 222.68C101.256 222.992 101.515 223.41 101.515 223.845C101.515 224.197 101.3 224.576 100.813 224.891C100.33 225.205 99.6286 225.415 98.8175 225.415ZM85.7045 223.605L85.6667 223.591L85.6272 223.584C84.7922 223.428 84.1254 223.055 83.7251 222.627C83.3234 222.198 83.232 221.774 83.3594 221.434C83.5035 221.049 83.9035 220.698 84.5198 220.489C85.125 220.284 85.8696 220.243 86.575 220.419C87.42 220.658 88.081 221.072 88.4813 221.525C88.8842 221.981 88.985 222.42 88.8717 222.773C88.7556 223.134 88.3751 223.48 87.7569 223.669C87.1513 223.853 86.4009 223.855 85.7045 223.605ZM191.675 74.4377C191.617 74.4749 191.566 74.5076 191.522 74.5356C179.242 71.3417 166.055 69.6888 152.992 69.6888C139.928 69.6888 126.742 71.3417 114.461 74.5357C114.418 74.5078 114.367 74.4751 114.309 74.438C114.087 74.297 113.762 74.091 113.343 73.8304C112.506 73.3091 111.297 72.5692 109.806 71.6933C106.825 69.9418 102.713 67.6444 98.1972 65.4631C93.6834 63.283 88.7517 61.2124 84.1316 59.9213C79.5293 58.6352 75.1578 58.0995 71.806 59.074L71.5778 59.1403L71.4852 59.3591C63.2032 78.9125 68.0001 94.1873 69.7581 98.4749C64.9392 103.455 61.342 107.955 58.9468 113.173C56.5111 118.478 55.3347 124.489 55.3347 132.445C55.3347 160.211 64.0511 175.384 77.1975 184.024C89.9998 192.438 106.923 194.591 123.719 196.346C119.585 200.248 115.975 206.408 114.6 214.987C110.198 216.854 102.582 219.257 94.4318 218.576C86.1528 217.884 77.2946 214.01 70.6512 203.064L70.6496 203.061C66.3667 196.106 60.3345 192.34 55.3861 190.314C52.9116 189.302 50.7038 188.722 49.1125 188.396C48.3165 188.232 47.674 188.132 47.2285 188.073C47.0057 188.043 46.8321 188.023 46.7131 188.011C46.6829 188.008 46.6562 188.005 46.6331 188.003C46.6108 188.001 46.5918 187.999 46.5763 187.998L46.5398 187.995L46.5298 187.994L46.5269 187.994L46.5259 187.994C46.5256 187.994 46.5253 187.994 46.4879 188.492L46.5253 187.994L46.5095 187.992L46.4936 187.992C44.5902 187.97 43.1212 188.093 42.0137 188.334C40.9149 188.574 40.1178 188.942 39.6198 189.454C39.0962 189.993 38.95 190.644 39.0632 191.302C39.1716 191.932 39.5139 192.563 39.9431 193.149C40.8044 194.325 42.1394 195.482 43.2323 196.332C43.7834 196.761 44.2823 197.118 44.6436 197.368C44.8244 197.494 44.971 197.592 45.0729 197.66C45.1239 197.694 45.1637 197.72 45.191 197.738L45.2225 197.758L45.2309 197.764L45.2332 197.765L45.2339 197.766C45.2341 197.766 45.2342 197.766 45.504 197.345L45.2342 197.766L45.2692 197.788L45.3075 197.805C50.2014 199.897 54.4065 205.042 57.4117 209.75C58.9064 212.092 60.0892 214.302 60.8983 215.926C61.3027 216.738 61.6134 217.403 61.8226 217.864C61.9271 218.094 62.0063 218.273 62.0592 218.395C62.0733 218.427 62.0855 218.455 62.0958 218.479C62.1048 218.5 62.1124 218.518 62.1185 218.532L62.1322 218.564C66.7607 231.726 80.059 236.038 91.9858 237.105C97.9719 237.64 103.668 237.365 107.864 236.957C109.963 236.753 111.689 236.516 112.892 236.329C113.432 236.245 113.867 236.171 114.183 236.116C114.185 242.072 114.23 249.712 114.275 256.356C114.288 258.39 114.302 260.33 114.314 262.1C114.344 266.31 114.367 269.557 114.367 270.81C114.367 272.564 113.717 274.482 112.174 275.805C110.645 277.117 108.159 277.912 104.345 277.278C43.2479 258.129 0.5 203.767 0.5 140.263C0.5 60.8408 65.4846 0.5 150.532 0.5C235.597 0.5 304.5 60.8568 304.5 140.263C304.5 203.773 262.975 258.131 201.701 277.163C197.919 277.797 195.431 277.003 193.894 275.69C192.342 274.365 191.678 272.446 191.678 270.695C191.678 269.14 191.699 265.486 191.725 260.59C191.739 258.072 191.755 255.225 191.771 252.166C191.817 243.162 191.863 232.326 191.863 222.638C191.863 209.721 187.513 201.161 182.124 196.34C198.921 194.56 216.2 192.446 229.364 184.071C242.895 175.463 252.002 160.305 252.002 132.445C252.002 124.499 250.48 118.497 247.702 113.192C244.973 107.983 241.045 103.473 236.225 98.4757C237.983 94.1916 242.781 78.9698 234.499 59.3596L234.407 59.1416L234.18 59.0746C230.827 58.0848 226.455 58.6136 221.853 59.897C217.232 61.1855 212.3 63.258 207.786 65.4417C203.27 67.6266 199.159 69.9295 196.177 71.6855C194.686 72.5637 193.477 73.3056 192.64 73.8283C192.222 74.0897 191.896 74.2963 191.675 74.4377ZM60.0621 198.67L60.0882 198.652L60.1116 198.63C60.3559 198.401 60.7239 198.316 61.1961 198.416C61.6661 198.516 62.1817 198.792 62.6161 199.195C63.078 199.681 63.3213 200.189 63.3798 200.599C63.4375 201.003 63.3179 201.27 63.1063 201.423L63.0802 201.441L63.0567 201.463C62.8124 201.692 62.4445 201.777 61.9722 201.677C61.5023 201.578 60.9867 201.301 60.5522 200.898C60.0903 200.412 59.8471 199.904 59.7886 199.495C59.7309 199.09 59.8505 198.823 60.0621 198.67ZM54.7956 195.418L54.7758 195.407L54.7551 195.397C54.1953 195.136 53.8215 194.815 53.6344 194.524C53.4652 194.26 53.4616 194.054 53.548 193.884C53.6681 193.739 53.8832 193.611 54.2296 193.556C54.5859 193.5 55.0509 193.528 55.5984 193.676C56.1377 193.935 56.4992 194.247 56.6822 194.532C56.8602 194.81 56.8549 195.023 56.7542 195.198L56.7503 195.205L56.7466 195.212C56.6233 195.443 56.3673 195.617 55.9996 195.672C55.6325 195.726 55.1934 195.651 54.7956 195.418ZM73.3549 214.471L73.396 214.44L73.4298 214.401C73.6871 214.105 74.1589 213.936 74.7799 214.015C75.3935 214.094 76.0947 214.414 76.6999 215.005L76.7085 215.014L76.7174 215.022C77.2571 215.501 77.5995 216.113 77.7218 216.667C77.8472 217.234 77.7282 217.64 77.5073 217.846L77.4884 217.864L77.4714 217.884C77.2121 218.182 76.7539 218.348 76.145 218.269C75.5399 218.191 74.8346 217.871 74.1933 217.272L74.1761 217.256L74.1574 217.241C73.5297 216.756 73.1584 216.149 73.041 215.618C72.9241 215.089 73.0609 214.694 73.3549 214.471ZM66.2946 206.054L66.3207 206.039L66.3448 206.021C66.6705 205.773 67.1311 205.718 67.6484 205.894C68.1657 206.071 68.693 206.471 69.0669 207.045L69.0754 207.058L69.0848 207.071C69.9866 208.283 69.8523 209.424 69.189 209.934C68.9839 210.077 68.5719 210.128 68.0075 209.918C67.4613 209.715 66.8786 209.3 66.4435 208.716C66.0017 208.122 65.8044 207.52 65.8044 207.038C65.8044 206.565 65.9879 206.233 66.2946 206.054ZM108.63 223.968C108.082 223.733 107.796 223.376 107.737 223.025C107.672 222.556 107.848 222.106 108.265 221.705C108.685 221.3 109.337 220.964 110.15 220.776C110.952 220.704 111.711 220.837 112.276 221.095C112.864 221.363 113.152 221.717 113.205 222.03C113.262 222.386 113.111 222.789 112.684 223.183C112.255 223.577 111.588 223.918 110.762 224.104C109.928 224.286 109.176 224.202 108.63 223.968Z"
            {...this.props}
          />
        );

      default:
        return <path />;
    }
  }

  render() {
    const styles = `
    svg {
        padding-left: 1.5rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <svg
        width={this.props.width || 24}
        height={this.props.height || 24}
        fill={this.props.fill || "none"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={this.getViewBox()}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>{this.props.title}</title>

        {this.getPath()}
      </svg>
    );
  }
}

export default Icon;
