import React, { useState } from "react";
import Style from "style-it";
import { Icon } from "../export-components";

export default function ScrollUpButton(props) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const styles = `
  .btn-scrollup {
    position: fixed;
    width: 3.75rem;
    height: 3.75rem;
    bottom: 3.75rem;
    right: 3.75rem;
    min-width: 0rem;
    border-radius: 3.125rem;
    background: var(--gradient);
    box-shadow: 0.125rem 0.125rem 0.1875rem var(--med-grey);
    border: none;
    z-index: 1000;
    cursor: pointer;
}`;

  window.addEventListener("scroll", toggleVisible);
  return Style.it(
    `${styles}`,
    <button
      onClick={scrollToTop}
      className="btn-scrollup"
      style={{ display: visible ? "inline" : "none" }}
    >
      <Icon
        name="arrow-up"
        fill="var(--white)"
        width={props.width || 30}
        height={props.height || 30}
      />
    </button>
  );
}
