import React, { useState } from "react";

import { NavbarItem, Card, ScrollUpButton } from "../export-components";

import Style from "style-it";

export default function NavbarandContent(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  const styles = `
    .tab-list-item {
        display: inline-block;
        list-style: none;
        padding: 1rem 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .tab-list {
        text-align: center;
    }

    .tab-list-active {
        font-weight: 600;
        border-bottom: 0.2rem solid var(--light-purple);
        border-radius: 0.4rem;
        color: var(--dark-purple);
    }

    .tab-list-active::before {
        content: "✿ ";
        color: var(--light-purple);
    }
    `;

  return Style.it(
    styles,
    <div className="tabs">
      <ol className="tab-list" role="tablist">
        {props.children.map((child) => {
          const { label } = child.props;

          return (
            <NavbarItem
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        <Card>
          {props.children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </Card>
      </div>
      <ScrollUpButton />
    </div>
  );
}
