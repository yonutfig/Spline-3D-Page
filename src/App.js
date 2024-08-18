import React, { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Events from "./Pages/Events/events";
import About from "./Pages/About/AboutUs";
// import Join from "./Pages/Join/SignUp";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Home() {
  const navigate = useNavigate();

  const onMouseDown = (e) => {
    switch (e.target.name) {
      case "joinbutt":
        navigate("/SignUp");
        break;
      case "Events":
        navigate("/events");
        break;
      case "AbousUs":
        navigate("/about");
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          className="spline"
          scene="https://prod.spline.design/wsi-tQggJnNfLLfp/scene.splinecode"
          onMouseDown={onMouseDown}
        />
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans Mono", monospace;
  font-size: 16px;
  color: white;
  position: relative;
  height: 100vh;
  overflow: hidden;
  .spline {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      {/* <Route path="/SignUp" element={<Join />} /> */}
    </Routes>
  );
}

export default App;
