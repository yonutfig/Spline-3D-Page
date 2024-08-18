import React from "react";
import styled from "styled-components";
const Navigation = () => {
  return (
    <>
      <Header>
        <div className="logo">Elite Retreat</div>
        <Nav>
          <a href="/">
            <Button>Home</Button>
          </a>
          <a href="./aboutUs.js">
            <Button>About Us</Button>
          </a>
          <a href="../Events/events.js">
            <Button>Events</Button>
          </a>
          <a href="../Acceptance/acceptance.js">
            <Button>Acceptance</Button>
          </a>
          <a href="../Join/join.js" className="join-link">
            <JoinButton>Join</JoinButton>
          </a>
        </Nav>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #172e31 29%, #1c2d36 41%, #1f3b3f 43%);
  background-blend-mode: overlay;
  border-radius: 24px;
  width: 90vw;
  height: 68px;
  margin: 0 auto;
  font-family: "Newsreader", serif;

  .logo {
    margin-left: 20px;
    color: White;
    text-align: center;
    font-size: 36px;
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 45vw;
  font-family: "Newsreader", serif;

  a {
    text-decoration: none;
    color: White;
    font-size: 28px;
  }
`;
const Button = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(1px);
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
const JoinButton = styled(Button)`
  font-size: 22px; /* Larger font size for Join button */
`;
export default Navigation;
