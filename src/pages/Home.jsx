import React, { Suspense, useContext, useRef } from "react";
import styled from "styled-components";
import { Contact } from "../components/Contact";

import { Canvas, useFrame } from "@react-three/fiber";
import Tiger from "../components/Tiger";
import {
  OrbitControls,
  MeshReflectorMaterial,
  Shadow,
  ContactShadows,
} from "@react-three/drei";
import { ThemeContext, Glass } from "../props";
import {
  Link as LinkScroll,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import {
  useTransition,
  animated,
  useSpring,
  Spring,
} from "@react-spring/three";

export const Home = () => {
  const boxRef = useRef();
  const { theme, translate } = useContext(ThemeContext);

  const nameRus = ["А", "я"].map((d, i) => <span>{d}</span>);
  const surnameRus = ["И", "в", "а", "н", "о", "в", "а"].map((d, i) => (
    <span>{d}</span>
  ));
  const fullnameRus = (
    <div>
      {nameRus} {surnameRus}
    </div>
  );

  const nameEn = ["A", "i", "a"].map((d, i) => <span key={i}>{d}</span>);
  const surnameEn = ["I", "v", "a", "n", "o", "v", "a"].map((d, i) => (
    <span key={i}>{d}</span>
  ));
  const fullnameEn = (
    <div>
      {nameEn} {surnameEn}
    </div>
  );
  return (
    <Background>
      <Container>
        <Animation>
          
              <Canvas shadows={true} shadowMap={true} colorManagement={true}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                {/*  <MeshReflectorMaterial /> */}

                <directionalLight
                  position={[-2, 5, 2]}
                  /* position={[50, 20, 80]} */
                  intensity={1}
                  castShadow={true}
                />

                <ContactShadows
                  opacity={0.5}
                  scale={10}
                  blur={1}
                  far={7}
                  resolution={40}
                  color="#000000"
                  position={[0, -2.7, 0]}
                />
                <Suspense fallback={null}>
                  <Tiger castShadow />
                </Suspense>
              </Canvas>
          
        </Animation>

      </Container>

      <div>
        <Container>
          <Glass>
            <h4>
              {translate === true
                ? "Привет, я фронтенд / мобильный разработчик из Якутска!"
                : "Hello, i`m frontend / mobile developer based in Yakutsk!"}
              👋😊✨
            </h4>
          </Glass>

          <h1>{translate === true ? fullnameRus : fullnameEn}</h1>
          <Glass>
            <p>
              {translate === true
                ? `Я фронтенд / мобильный разработчик из Якутска с желанием
              создавать цифровые услуги, которые я хочу делать. У меня есть способности ко всему
              от запуска продуктов, от планирования и проектирования до
              решение реальных проблем с помощью кода. Когда не онлайн я люблю
              рисовать и узнавать новые технологии.`
                : `I'm frontend / mobile developer based in Yakutsk with passion for
              building digital services i want. I have a knack for all things
              launching products, from planning and designing all the way to
              solving real-life problems with code. When not online i love to
              draw and learn new technologies.`}
            </p>
          </Glass>

          <Element name="Contacts">
            <Contact />
          </Element>
        </Container>
      </div>
    </Background>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
const Background = styled.div`
  width: 100%;

  h1 {
    font-family: "Fredoka", sans-serif;
    color: black;
    font-size: 45px;
    display: inline-block;
  }

  span {
    animation-duration: 0.8s;
    animation-name: span;
    animation-direction: alternate;
    animation-iteration-count: 0;
    display: inline-block;
  }
  span:not(:hover) {
    animation-name: none;
  }
  h1:hover span {
    animation-play-state: running;
    animation-iteration-count: 1;
  }
  @keyframes span {
    0% {
      transform: scale(1.3, 0.9);
    }
    50% {
      transform: scale(0.7, 1.7);
    }
    60% {
      transform: scale(1, 1);
    }
    80% {
      transform: scale(1, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const Animation = styled.div`
  margin-top: 30px;
  height: 300px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;
