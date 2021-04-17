import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
// import { rgba } from 'polished';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em auto;

  h3 {
    font-size: 2.75rem;
    color: ${({ theme }) => theme.palette.secondaryDark};
    position: relative;
    margin-bottom: 0.35em;
    animation: fade-in 1s forwards ease-in;
    z-index: 1;

    &::after {
      --translateX: -50%;
      content: '';
      position: absolute;
      bottom: -0.15em;
      left: 50%;
      width: 90%;
      height: 0.075em;
      border-radius: 1em;
      background-color: ${({ theme }) => theme.palette.secondaryLight};
      transform: translateX(-50%);
      animation: fade-in 2s forwards ease-out;
    }

    &::before {
      --translateX: -50%;
      content: '';
      position: absolute;
      bottom: -0.125em;
      left: 50%;
      width: 90%;
      height: 0.075em;
      border-radius: 1em;
      background-color: ${({ theme }) => theme.palette.secondaryLight};
      transform: translateX(-50%);
      animation: fade-in 1.5s forwards ease-out;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-1em) translateX(var(--translateX, 0));
    }

    to {
      opacity: 1;
      transform: translateY(0) translateX(var(--translateX, 0));
    }
  }
`;

export const StyledLinearProgress = styled(LinearProgress)`
  margin: 4em auto;
  max-width: 600px;
  width: 80%;
`;

export const StyledCircularProgressContainer = styled.div`
  margin: 2em auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviousSearchesContainer = styled.div`
  display: flex;
  margin: 2em 0.5em;

  .search-term {
    color: ${({ theme }) => theme.palette.secondaryLight};
    font-size: 1.1rem;
    margin-left: 0.75em;

    :hover {
      color: ${({ theme }) => theme.palette.secondaryDark};
    }
  }
`;

export const StyledImageGrid = styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  width: 90%;
  margin: 3em auto;
  columns: 4 300px;
  column-gap: 2em;

  /* 3 column Masonry for when screen fits 3 cards on the Home Page */
  @media (max-width: 1810px) {
    column-count: 3;
  }
  /* 3 column Masonry for when screen fits 2 cards on the Home Page */
  @media (max-width: 1349px) {
    column-count: 2;
  }
  /* 3 column Masonry for when screen fits 1 card on the Home Page */
  @media (max-width: 740px) {
    column-count: 1;
  }
`;

export const StyledSubReddit = styled.div`
  width: 100%;
  margin: 0 0 1em;
  position: relative;
  color: white;
  font-size: 1.25rem;
  transition: opacity 300ms ease-out;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  .normal {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
  }

  :hover .onhover {
    opacity: 1;
    transition: opacity 200ms ease-out;
  }

  :hover .onhover .overlay {
    border-radius: 0.5em;
    opacity: 1;
    transition: opacity 300ms ease-out 100ms;
  }

  .onhover {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none;
  }

  .onhover .overlay {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 10em 5em rgba(32, 32, 32, 0.65);
    pointer-events: none;
  }

  .onhover .top {
    z-index: 1;
    margin: 0.3em;
    line-height: 1.2;
  }

  .onhover .top .subreddit {
    font-size: 1.75rem;
    margin-bottom: 0.2em;
    color: #f5f5f5;
  }

  .bottom {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 0.2em;
    line-height: 1;
    align-items: center;
  }

  .onhover .bottom .fab.fa-reddit {
    color: ${({ theme }) => theme.palette.reddit};
    font-size: 2.5rem;
    pointer-events: all;
  }
`;

export const StyledPaginationContainer = styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
`;
