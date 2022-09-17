import React from "react";

export default function NavbarItem(props) {
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  let className = "tab-list-item";

  if (props.activeTab === props.label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={onClick}>
      {props.label}
    </li>
  );
}
