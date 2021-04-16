import styled from 'styled-components';
// import { rgba } from 'polished';

export const StyledImageGrid = styled.div`
  max-width: ${({ theme }) => theme.containerSize};
  width: 90%;
  margin: 3em auto;
  columns: 4 300px;

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
    box-shadow: inset 0 0 5em 5em rgba(32, 32, 32, 0.8);
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
    color: #ff5700;
    font-size: 2.5rem;
    pointer-events: all;
  }
`;

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
