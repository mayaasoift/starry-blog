import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Orbitron', sans-serif;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.3rem;
  color: #eaf6fb;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>Welcome to Starry Blog!</Title>
      <Subtitle>
        Explore blogs, discover projects, and enjoy the cosmic vibes.
      </Subtitle>
      <img 
        alt="Cosmic" 
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
        style={{ borderRadius: '1rem', boxShadow: '0 4px 18px #222', maxWidth: '100%', height: 'auto', marginBottom: '2rem' }}
      />
      <p>
        This site was made with React and styled-components.<br />
        Navigate above to read blogs or view projects!
      </p>
    </Wrapper>
  );
}