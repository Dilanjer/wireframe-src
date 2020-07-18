import React from "react";
import "./index.scss";

import { MobileNav, BurgerMenu, Button } from "../index";
import closeImg from "../../images/menu/burger-close.svg";

function Header({ burgerMenu, burgerMenuOpen, scrollPageTo, sections }) {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">Logo</div>
          <nav className="nav">
            <Button onClick={() => scrollPageTo(sections.intro)} className="nav__link">
              Home
            </Button>
            <Button onClick={() => scrollPageTo(sections.about)} className="nav__link">
              About
            </Button>
            <Button onClick={() => scrollPageTo(sections.team)} className="nav__link">
              Team
            </Button>
            <Button onClick={() => scrollPageTo(sections.portfolio)} className="nav__link">
              Portfoilo
            </Button>
            <Button onClick={() => scrollPageTo(sections.contact)} className="nav__link">
              Contact
            </Button>
          </nav>
          <div className="burger__menu">
            <BurgerMenu onClick={burgerMenuOpen}>
              <MobileNav state={burgerMenu ? "open" : ""}>
                <Button onClick={burgerMenuOpen} className="nav__link nav__link-burger">
                  <img src={closeImg} alt="" />
                </Button>
                <Button
                  onClick={() => {
                    burgerMenuOpen();
                    scrollPageTo(sections.intro);
                  }}
                  className="nav__link nav__link-burger"
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    burgerMenuOpen();
                    scrollPageTo(sections.about);
                  }}
                  className="nav__link nav__link-burger"
                >
                  About
                </Button>
                <Button
                  onClick={() => {
                    burgerMenuOpen();
                    scrollPageTo(sections.team);
                  }}
                  className="nav__link nav__link-burger"
                >
                  Team
                </Button>
                <Button
                  onClick={() => {
                    burgerMenuOpen();
                    scrollPageTo(sections.portfolio);
                  }}
                  className="nav__link nav__link-burger"
                >
                  Potfoilo
                </Button>
                <Button
                  onClick={() => {
                    burgerMenuOpen();
                    scrollPageTo(sections.contact);
                  }}
                  className="nav__link nav__link-burger"
                >
                  Contact
                </Button>
              </MobileNav>
            </BurgerMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
