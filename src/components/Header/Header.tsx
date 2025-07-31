// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { Container } from './styles';
import Resume from '../../assets/Sonalika.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle('light');
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <Container className="header-fixed">
      {/* Logo uses HashLink directly */}
      <HashLink smooth to="#home" className="logo">
        <span>{"<Sonalika "}</span>
        <span>{" Rathore/>"}</span>
      </HashLink>

      {/* Theme toggle */}
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      {/* Navigation Menu */}
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={Resume} download className="button">
          Resume
        </a>
      </nav>

      {/* Hamburger menu icon */}
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Close menu' : 'Open menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => setActive(!isActive)}
      />
    </Container>
  );
}
