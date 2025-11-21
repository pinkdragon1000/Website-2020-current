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
    width: 5.75rem;
    height: 5.75rem;
    bottom: 1.75rem;
    right: 2.75rem;
    min-width: 0rem;
    border-radius: 3.125rem;
    background: var(--gradient);
    box-shadow: 0.125rem 0.125rem 0.1875rem var(--med-grey);
    border: none;
    z-index: 1000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}`;

  window.addEventListener("scroll", toggleVisible);
  return Style.it(
    `${styles}`,
    <button
      onClick={scrollToTop}
      className="btn-scrollup"
      style={{ display: visible ? "flex" : "none" }}
    >
      <Icon
        name="arrow-up"
        fill="var(--white)"
        width={props.width || 1.875}
        height={props.height || 1.875}
      />
    </button>
  );
}
