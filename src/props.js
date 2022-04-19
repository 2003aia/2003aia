import { createContext } from "react";
import styled from 'styled-components'

export const ThemeContext = createContext({
  theme: false,
  changeTheme: () => {},
  translate: false,
  changeTranslate: () => {},
});

export const Glass = styled.div`
  text-align: center;

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  p{
    overflow-wrap: break-word;
  }
`;

export const GlassModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  text-align: center;

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
`;