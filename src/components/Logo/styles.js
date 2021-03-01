import styled from 'styled-components';

export default styled.h1`
  cursor: pointer;
  position: relative;
  font-size: 5rem;
  font-weight: 700;
  margin: 2rem 0;
  text-transform: uppercase;
  color: #f5f5f5;
  z-index: 1;

  text-shadow: 0 0 0.2em rgba(32, 32, 32, 0.8);

  &:hover {
    letter-spacing: 0.025em;
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
      0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    animation: glitch 900ms infinite;
  }

  & span {
    opacity: 0.9;
  }

  &:hover span {
    color: #f5f5f5;
    opacity: 0.9;
    animation: glitch 900ms infinite;
  }

  & span[aria-hidden] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover span:first-of-type {
    opacity: 0.8;
    transform: translate(-0.0125em, 0.0125em);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    animation: glitch 700ms infinite;
  }

  &:hover span:last-of-type {
    opacity: 0.8;
    transform: translate(0.0125em, -0.0125em);
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    animation: glitch 900ms infinite;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    19% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }

    20% {
      text-shadow: -0.05em 0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    64% {
      text-shadow: -0.05em 0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }

    65% {
      text-shadow: 0.025em -0.025em 0 rgba(255, 0, 0, 0.75),
        -0.05em 0.025em 0 rgba(0, 255, 0, 0.75),
        0.05em -0.025em 0 rgba(0, 0, 255, 0.75);
    }

    99% {
      text-shadow: 0.025em -0.025em 0 rgba(255, 0, 0, 0.75),
        -0.05em 0.025em 0 rgba(0, 255, 0, 0.75),
        0.05em -0.025em 0 rgba(0, 0, 255, 0.75);
    }

    100% {
      text-shadow: -0.025em 0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }
`;
