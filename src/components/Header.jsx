import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext, Glass, GlassModal } from "../props";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {
  Link as LinkScroll,
  Button as ButtonLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const Header = () => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(null);
  const { theme, changeTheme, translate, changeTranslate } =
    useContext(ThemeContext);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  const ThemeIcons = styled.div`
    div {
      margin-left: 0.4rem;
      width: 1.5rem;
      height: 1.5rem;
      padding: 10px;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      border-radius: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s;
    }
    div:hover {
      background: rgba(255, 255, 255, 0.8);
    }
    div:hover #moon {
      color: ${theme === true ? "black" : "black"};
    }

    div:hover span {
      color: ${theme === true ? "black" : "black"};
    }

    svg {
      position: absolute;
    }

    span {
      position: absolute;
      font-weight: bold;
    }

    #sun {
      opacity: ${theme === true ? "0" : "100%"};
    }
    #moon {
      opacity: ${theme === false ? "0" : "100%"};
    }
    #en {
      opacity: ${translate === false ? "0" : "100%"};
    }
    #rus {
      opacity: ${translate === true ? "0" : "100%"};
    }
    .menu {
      display: none;
    }
    @media only screen and (max-width: 620px) {
      .trans {
        display: none;
      }
      .menu {
        display: block;
      }
    }
  `;

  return (
    <Background>
      <Container>
        <Link
          to="/"
          /* href="https://2003aia.github.io/2003aia/" */ style={{
            textDecoration: "none",
          }}
        >
          <Logo>
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                class="bi bi-journal-code"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>{" "}
              Aia Ivanova
            </h2>
          </Logo>
        </Link>
        <Nav>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal}
            onClose={() => setModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modal}>
              <GlassModal>
                <p>
                  {translate === true
                    ? "Извините, эта часть все еще в разработке"
                    : "Sorry, this part is still in development"}
                  💻
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-code-slash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                  </svg>
                  .
                </p>
              </GlassModal>
            </Fade>
          </Modal>

          <ul>
            <li>
              {" "}
              <a
                onClick={() => setModal(true)}
                href="#work"
                style={{ textDecoration: "none" }}
              >
                {translate === true ? "работы" : "works"}
              </a>{" "}
            </li>
            <li>
              <LinkScroll
                to="Contacts"
                spy={true}
                smooth={true}
                offset={50}
                duration={300}
                /* style={{ textDecoration: "none" }} */
              >
                <a style={{ textDecoration: "none" }}>
                  {translate === true ? "контакты" : "contacts"}
                </a>
              </LinkScroll>
            </li>

            <li>
              <a
                className="git"
                style={{ textDecoration: "none" }}
                href="https://github.com/2003aia/2003aia/tree/master"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>

                {translate === true ? "код" : "source"}
              </a>
            </li>
          </ul>
        </Nav>

        <div style={{ display: "flex" }}>
          <ThemeIcons
            onClick={(e) => {
              e.preventDefault();

              changeTheme(theme == false ? true : false);
            }}
          >
            <div>
              <svg
                id="sun"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-brightness-high"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
              <svg
                id="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-moon-stars"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            </div>
          </ThemeIcons>
          <ThemeIcons
            onClick={(e) => {
              e.preventDefault();
              changeTranslate(translate == false ? true : false);
            }}
          >
            <div className="trans">
              <span id="en">EN </span>
              <span id="rus">RUS</span>
            </div>
          </ThemeIcons>
          <ThemeIcons
            onClick={(e) => {
              e.preventDefault();

              setMenu(e.currentTarget);
            }}
          >
            <div className="menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-justify"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </ThemeIcons>
        </div>
      </Container>
      <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          top: 35,

          "& .MuiPaper-root": {
            background: "rgba(255, 255, 255, 0.7)",
          },
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={(e) => {
            
            setModal(true);
            handleClose(e);
          }}
        >
          works
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {" "}
          <LinkScroll
            to="Contacts"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            /* style={{ textDecoration: "none" }} */
          >
            <a style={{ textDecoration: "none" }}>
              {translate === true ? "контакты" : "contacts"}
            </a>
          </LinkScroll>
        </MenuItem>
        <MenuItem onClick={handleClose}>source</MenuItem>
        <MenuItem
          onClick={() => changeTranslate(translate == false ? true : false)}
        >
          <div className="trans">
            <span id="en">EN</span>/<span id="rus">RUS</span>
          </div>
        </MenuItem>
      </Menu>
    </Background>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;

  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
  }
`;

const Background = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Nav = styled.div`
  ul {
    list-style: none;
  }
  li {
    display: inline;
    padding-left: 30px;
    transition: 0.5s;
  }
  li:hover {
    text-decoration: underline;
  }
  svg {
    padding-right: 8px;
  }
  @media only screen and (max-width: 620px) {
    ul {
      display: none;
    }
  }
`;

const Logo = styled.div`
  h2 {
    font-family: "Fredoka", sans-serif;
    color: black;
    display: flex;
    align-items: center;
  }
  svg {
    padding: 0 10px 0 0;
    display: block;
    transform: 0 0;
    transition: 0.3s;
  }
  h2:hover > svg {
    transform: rotate(20deg);
  }
`;
