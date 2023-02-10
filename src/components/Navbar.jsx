import React, { cloneElement } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbar_container}>
      <ul className="container">{children}</ul>
    </nav>
  );
};

Navbar.Item = NavItem;

export default Navbar;

function NavItem({ children, ...restProps }) {
  return <li {...restProps}>{cloneElement(children)}</li>;
}
