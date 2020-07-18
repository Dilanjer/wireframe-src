import React, { useRef } from "react";
import { Header, Intro, About, Team, Portfolio, Contact, Footer } from "../index";
import "./index.scss";

function App() {
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  const sections = {
    intro: useRef(null),
    about: useRef(null),
    team: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: "smooth" });

  const burgerMenuOpen = () => {
    setBurgerMenu(!burgerMenu);

    if (!burgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className={`App ${burgerMenu ? "fade" : ""}`}>
      <Header burgerMenuOpen={burgerMenuOpen} burgerMenu={burgerMenu} scrollPageTo={scrollTo} sections={sections} />
      <Intro section={sections.intro} />
      <About section={sections.about} />
      <Team section={sections.team} />
      <Portfolio section={sections.portfolio} />
      <Contact section={sections.contact} />
      <Footer />
    </div>
  );
}

export default App;
