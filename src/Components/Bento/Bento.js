import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalButton from "../Modal-component/Modal";
import "./bento.css";
import AvatarComponent from "../Avatar/Avatar";

const BentoGrid = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <GridWrapper ref={ref}>
      <GridContainer>
        <GridItem
          className="large"
          style={{
            gridArea: "1 / 1 / 3 / 4",
            backgroundColor: "#1A3940",
            fontSize: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>
            Established in 2020, Elite Retreat redefines luxury hospitality with
            sophistication and exclusivity. Founded by Gabriel Firea, we set new
            standards for opulence and refinement in the industry.
          </p>

          <ModalButton />
        </GridItem>
        <GridItem
          className="medium"
          style={{
            gridArea: "1 / 4 / 4 / 5",
            backgroundColor: "#BF8D7A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <h2>LIMITED EDITION THE ELITE RETREAT MONOPOLY</h2>

          <img
            className="monopoly"
            src="https://cdn4.iconfinder.com/data/icons/board-games-glyph/48/Games_BoardGames_Artboard_48-512.png"
            alt="monopoly"
          ></img>
          <p>
            This special edition of the classic board game transports you
            through Mayfair and St. James’s and immerses you in the luxurious
            atmosphere of The Elite Retreat.
          </p>
          <a
            href="#more-info"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            MORE INFORMATION
          </a>
        </GridItem>
        <GridItem
          className="small small-animation"
          style={{
            gridArea: "1 / 5 / 6 / 6",
            backgroundColor: "#8C5946",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <StyledCarousel>
            <Carousel.Item
              controls={false}
              indicators={false}
              interval={2000}
              fade
              pause="hover"
            >
              <img
                className="d-block w-300 h-600"
                src="https://cdn.leonardo.ai/users/b7afd913-6d4e-4dea-bc9a-45a313b558e3/generations/48beaa36-4089-4e12-ab52-f160a3406d05/Default_deluxe_resort_0.jpg"
                alt="Award 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-300 h-600"
                src="https://cdn.leonardo.ai/users/b7afd913-6d4e-4dea-bc9a-45a313b558e3/generations/1b0731d1-42b3-49f8-ac09-60f8fce1d4b8/Default_interesting_statues_that_show_deluxe_2.jpg"
                alt="Award 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-300 h-600"
                src="https://cdn.leonardo.ai/users/b7afd913-6d4e-4dea-bc9a-45a313b558e3/generations/5c9493e3-ad4f-4595-9fc8-bb2a1fe37322/Default_DELUXE_SUITE_2.jpg"
                alt="Award 3"
              />
            </Carousel.Item>
          </StyledCarousel>
        </GridItem>
        <GridItem
          className="small"
          style={{ gridArea: "3 / 1 / 4 / 2", backgroundColor: "#0D0D0D" }}
        >
          <AvatarComponent />
        </GridItem>
        <GridItem
          className="small"
          style={{ gridArea: "3 / 2 / 4 / 4", backgroundColor: "#0D0D0D" }}
        >
          <h3>98% Guest Satisfaction</h3>
          <p>
            Our commitment to excellence is reflected in our high guest
            satisfaction rate.
          </p>
        </GridItem>
        <GridItem
          className="large"
          style={{
            gridArea: "4 / 1 / 6 / 3",
            backgroundColor: "#BF8D7A",
            display: "flex",
            flexDirection: "row",
            textAlign: "left",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "65%" }}>
            <h2>AFTERNOON TEA</h2>
            <p>
              Savour the finest slice of life, from delicately cut sandwiches to
              picture-perfect pastries, accompanied by our finest tea and
              Champagne.
            </p>
            <button
              style={{
                backgroundColor: "#fff",
                border: "none",
                color: "#BF8D7A",
                padding: "10px 18px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "10px 0",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              BOOK NOW
            </button>
          </div>
          <img
            src="https://www.theritzlondon.com/wp-content/uploads/2020/08/2X5A0945a.jpg"
            alt="green"
            style={{
              width: "48%",
              borderRadius: "24px",
              height: "auto",
              objectFit: "contain",
              marginLeft: "auto", 
            }}
          />
        </GridItem>
        <GridItem className="medium" style={{ gridArea: "4 / 3 / 6 / 5" }}>
          {inView && (
            <StyledSpline
              className="small-animation"
              scene="https://prod.spline.design/22pkAfUdbmWE8oCW/scene.splinecode"
              onLoad={() => setIsLoaded(true)}
              style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
          )}
        </GridItem>
      </GridContainer>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  margin: 20px auto;
  overflow: hidden;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 90vw;
  height: 75vh;
  margin-top: 70px;
`;

const GridItem = styled.div`
  background: rgba(31, 59, 63, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-item img {
    width: 50vw;
    height: 70vh;
    border-radius: 24px;
    object-fit: contain;
    animation: zoomOutIn 3s ease-in-out;
  }
`;

const StyledSpline = styled(Spline)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  padding: 0;
  box-sizing: border-box;
`;

export default BentoGrid;
