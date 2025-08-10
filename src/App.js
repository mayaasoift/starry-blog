import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import StarryBackground from './StarryBackground';
import Navbar from './Navbar';
import Home from './Home';
import Blogs from './Blogs';
import Projects from './Projects';

const GlobalStyle = createGlobalStyle`
  body {
    background: #111;
    color: #eaf6fb;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 70px;
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <StarryBackground />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;