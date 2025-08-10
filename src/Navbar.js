import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background: rgba(20, 24, 38, 0.95);
  padding: 0.7rem 2rem;
  display: flex;
  align-items: center;
  z-index: 100;
  box-shadow: 0 2px 18px 2px rgba(0,0,0,0.18);
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffd700;
  margin-right: 3rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: ${p => p.selected ? '#ffd700' : '#eaf6fb'};
  padding-bottom: 2px;
  border-bottom: ${p => p.selected ? '2px solid #ffd700' : 'none'};
  transition: color 0.2s;
  &:hover {
    color: #ffd700;
  }
`;

export default function Navbar() {
  const location = useLocation();
  return (
    <Nav>
      <Logo>Starry Blog</Logo>
      <NavLinks>
        <NavLink to="/" selected={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/blogs" selected={location.pathname === '/blogs'}>Blogs</NavLink>
        <NavLink to="/projects" selected={location.pathname === '/projects'}>Projects</NavLink>
      </NavLinks>
    </Nav>
  );
}