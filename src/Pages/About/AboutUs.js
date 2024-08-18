import React, { useState } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { useInView } from "react-intersection-observer";
import Navigation from "../../Components/Header";
import BentoGrid from "../../Components/Bento/Bento";
import "./AboutUs.css";

const AboutUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper>
      <Navigation />
      <Main>
        <Tile className="hero" ref={ref}>
          <div className="content-wrapper">
            <Overlay className="overlay">
              <h1>
                <div className="welcome">Welcome to</div> Elite Retreat
              </h1>
              <p>Experience Luxury and Exclusivity</p>
            </Overlay>
          </div>

          {inView && (
            <Spline
              className="spline-one"
              scene="https://prod.spline.design/jJEKKCkeHWrF761K/scene.splinecode"
              onLoad={() => setIsLoaded(true)}
              style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
          )}
        </Tile>
      </Main>
      <BentoGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Newsreader", serif;
  margin: 0 auto;
  overflow-x: hidden;
`;

const Main = styled.main`
  display: grid;
  width: 90vw;
  max-height: fit-content;
  margin: 0 auto;
  text-align: center;
  border-radius: 28px;
`;

const Tile = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
`;

const Overlay = styled.div`
  h1 {
    font-size: 56px;
    margin: 0;
  }
  .welcome {
    font-size: 48px;
    -webkit-text-stroke: 1px #1f3b3f;
  }
  p {
    font-size: 24px;
    color: transparent;
    -webkit-text-stroke: 1px black;
  }
`;

export default AboutUs;
