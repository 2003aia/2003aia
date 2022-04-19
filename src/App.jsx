import styled from "styled-components";
import { Header } from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { useContext, useState, Suspense } from "react";
import { ThemeContext } from "./props";
import { Footer } from "./components/Footer";

export default function App() {
  const [theme, changeTheme] = useState(false);
  const [translate, changeTranslate] = useState(false);
  const value = { theme, changeTheme, translate, changeTranslate };
  return (
      <ThemeContext.Provider value={value}>
        <MainPort />
      </ThemeContext.Provider>
  );
}

function MainPort() {
  const { theme } = useContext(ThemeContext);

  const Wrapper = styled.div`

    background-color: ${theme === false ? "#6c3fff" : "#1F1F5B"};
 /*    background-image: ${theme === false
      ? "linear-gradient(90deg, #6c3fff 0%, #24ffb2 100%)"
      : "linear-gradient(0deg, #181d27 0%, #1F1F5B 85%)"}; */
    color: ${theme === false ? "black" : "white"};
    a {
      color: ${theme === false ? "black" : "white"};
    }
    h1 {
      color: ${theme === false ? "black" : "#eee"};
    }
    h2 {
      color: ${theme === false ? "black" : "#eee"};
    }
    svg {
      color: ${theme === false ? "black" : "#eee"};
    }
    span {
      color: ${theme === false ? "black" : "#eee"};
    }
    height: fit-content;
    width: 100%;
    min-width: 300px;
    font-family: "Alata", sans-serif;
    p {
      font-size: 17px;
    }
    h4 {
      font-size: 18px;
    }
  `;

  return (
    <Wrapper>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
