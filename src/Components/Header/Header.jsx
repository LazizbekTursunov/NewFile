import "./Header.scss";
import BehindHome from "../img/OppositeHome.png";
import HeaderLogo from "../img/HeaderLogo.svg";
import Lines from "../img/ThreeParallelLines.png";
import React from "react";

function Header() {
  const xRef = React.useRef();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__info">
            <img className="header__img" src={BehindHome} alt="HomePicture" width={31} height={31}/>
            <a className="header__logo" href="http://localhost:3000/">
              <img className="header__logotip" src={HeaderLogo} alt="HeaderLogo" width={91} height={30}/>
            </a>
          </div>

          <ul className="header__list">
            <li className="header__item">
              <a className="header__link" href="http://localhost:3000/">About</a>
            </li>

            <li className="header__item">
              <a className="header__link" href="http://localhost:3000/">Blog</a>
            </li>

            <li className="header__item">
              <a className="header__link" href="http://localhost:3000/">Agency</a>
            </li>

            <li className="header__item">
              <a className="header__link" href="http://localhost:3000/">Featured</a>
            </li>

            <li className="header__item">
              <a className="header__link" href="http://localhost:3000/">Price</a>
            </li>
          </ul>

          <button className="header__btn" ref={xRef} onClick={() => {
            xRef.current.classList.add("modal")
          }}>

            <img src={Lines} alt="Header__line" width={30} height={14.34}/>            
          </button>

          <div className="modal__menu" ref={xRef}>
           <button onClick={() => {
            xRef.current.classList.remove("modal");
           }}>O</button>
           Think there's meaningful one here!
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
