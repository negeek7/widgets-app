import React from "react";
import Link from "./Link";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ margin: "20px", width: "420px" }}
    >
      <Link
        href="/"
        className="item item-style"
        style={{ marginRight: "20px" }}
      >
        Accordion
      </Link>
      <Link
        href="/search"
        className="item item-style"
        style={{ marginRight: "20px" }}
      >
        Search
      </Link>
      <Link
        href="/dropdown"
        className="item item-style"
        style={{ marginRight: "20px" }}
      >
        Dropdown
      </Link>
      <Link
        href="/translate"
        className="item item-style"
        style={{ marginRight: "20px" }}
      >
        Translate
      </Link>
    </div>
  );
};

export default Header;
