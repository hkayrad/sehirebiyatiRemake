import { useState } from "react";
import { NavLink } from "react-router-dom";
import localization from "../localization.json";

export default function Header() {
  const [lang, setLang] = useState(1);

  const changeLang = () => {
    if (lang == 1) {
      setLang(0);
    } else {
      setLang(1);
    }
  };

  return (
    <nav className="navBar">
      <img className="logo" src="/img/logo.svg" alt="" />
      <ul className="navList">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
            end
          >
            {localization[lang].strings.navbar.homePage}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="references"
          >
            {localization[lang].strings.navbar.ref}
          </NavLink>
        </li>
      </ul>
      <button className="changeLang" onClick={changeLang}>
        CL
      </button>
    </nav>
  );
}
