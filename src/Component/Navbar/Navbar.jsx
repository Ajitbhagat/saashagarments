import React from "react";
import Logo from "../Menu/Logo";
import Menu from "../Menu/Menu";
import "./Navbar.css";
import Search from "../Menu/Search";

const Navbar = () => {
  return (
    <section id="main">
      <article>
        <Logo />
        <Search />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
