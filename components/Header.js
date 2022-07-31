import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faCoffee,
  faBars,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

library.add(faMap, faCoffee, faBars, faHome);
function Header() {
  return (
    <Nav>
      <a href="/">
        <Logo>
          <img className="LogoImg" src="/images/watchlist-icon.svg" />
          <span> MyProj</span>
        </Logo>
      </a>
      <NavMenu>
        <a>
          <FontAwesomeIcon
            className="MenuItem"
            color="white"
            size="sm"
            icon={faHome}
          />
          <span> Home</span>
        </a>
        <Link to="/Projects">
          <FontAwesomeIcon
            className="MenuItem"
            color="white"
            size="sm"
            icon={faMap}
          />
          <span> Projects</span>
        </Link>
        <Link to="/Ideas">
          <FontAwesomeIcon
            className="MenuItem"
            color="white"
            size="sm"
            icon={faCoffee}
          />
          <span> Ideas</span>
        </Link>
      </NavMenu>
      <AboutMe>
        <span id="aboutMe" onClick={mouseOn}>
          <FontAwesomeIcon className="BarMenu" color="white" icon={faBars} />
        </span>
      </AboutMe>
      <SideMenu id="sideMenu">
        <div className="exitMenu"></div>
        <span>
          <a>Log in</a>
        </span>
        <span>
          {" "}
          <a>Sign Up</a>
        </span>
        <span>
          {" "}
          <a>Home Page</a>
        </span>
        <span>
          {" "}
          <Link to="/projects">Projects</Link>
        </span>
        <span>
          {" "}
          <Link to="/ideas">Ideas</Link>
        </span>
      </SideMenu>
    </Nav>
  );
}
const Nav = styled.nav`
  height: 70px;
  background: black;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-items: stretch;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 1;
`;
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  align-items: center;
  width: 15%;
  color: white;
  padding-left: 3%;

  img {
    height: 30px;
    border: 3px solid white;
    border-radius: 50%;

    transition: 2s;
  }
  span {
    letter-spacing: 1.6px;
    font-weight: 700;
    padding-left: 6px;
    position: relative;
    cursor: pointer;
    :hover {
      font-weight: 740;
    }

    &:after {
      position: absolute;
      height: 3px;
      bottom: -3px;
      right: 0;
      left: -3px;
      background: white;
      content: "";

      width: 0;
      transition: 2s;
    }
  }
  :hover {
    .LogoImg {
      transition: transform 3s;
      transform: rotate(360deg);

  
    span:after {
      transition: width 1s ease;
      opacity: 1;
      width: 100%;
    }
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  width: 68%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;

    letter-spacing: 2px;
    margin: 3%;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    transition: 0.2s;
    font-size: 14px;
    :hover {
      cursor: pointer;
      :after {
        transition: width 0.3s ease;
        opacity: 1;
        width: 100%;
      
    }
    &:after {
      position: absolute;
      height: 1px;
      bottom: -3px;
      right: 0;
      left: 0;
      background: white;
      content: "";

      width: 0;
      transition: 0.3s;
    }
  }

  .MenuItem {
    padding-right: 5px;
  }
  img {
    width: 24px;
    height: 24px;
    padding-right: 5px;
  }
`;
const AboutMe = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15%;
  z-index: 1000;
  padding-right:3%;
  @media only screen and (max-width: 600px) {
    width: 70%;
    padding-left:9%;

  .BarMenu {
    border: 1px solid white;

    margin: 0;
    height: 15px;
    width: 15px;
    padding: 5px;
    transition: 1s;
    z-index: 1000;
   
    :hover {
      cursor: pointer;
      transition: 2s;
      color: black;
      border: 3px solid white;
    }
  }
`;
const SideMenu = styled.div`
  width: 200px;
  height: 400px;
  right: 0;
  top: 0;
  z-index: 10;
  position: absolute;
  background: white;
  display: none;
  margin-top: 70px;
  border: 1px solid black;
  border-bottom-left-radius: 9px;
  border-right: 0;
  border-top: 0;
  transition: width 2s ease;

  span {
    display: flex;

    width: 95%;
    padding: 6px 8px;

    height: 30px;
    color: black;
    font-weight: 600;
    line-height: 30px;
    :hover {
      background-color: gainsboro;
      color: grey;
      cursor: pointer;
      line-height: 25px;
    }
  }
`;
let clickCounter = 1;
const mouseOn = () => {
  const sideMenu = document.getElementById("sideMenu");
  const aboutMe = document.getElementById("aboutMe");
  clickCounter++;
  if (clickCounter % 2 == 0) {
    sideMenu.style.display = "block";
    aboutMe.textContent = "x";
    aboutMe.style.cssText = `
    border: 1px solid white;
    color: white;
    padding: 3px 9.3px;
    cursor: pointer`;
  } else {
    console.log("2");
    sideMenu.style.display = "none";
    aboutMe.textContent = "☰";

    aboutMe.style.cssText = `
    border: 1px solid white;
    color: white;
    padding: 1px 6px;
    cursor: pointer`;
  }
};

export default Header;
