import styled from 'styled-components';
// import { rgba } from 'polished';

export default styled.header`
  .search-container {
    width: 100%;
    min-height: 40vh;
    background: linear-gradient(to top, rgba(32, 32, 32, 0.9), transparent),
      url('http://unsplash.it/1024/720?random') no-repeat center center;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .search-box {
      display: flex;
      width: 45%;
      font-size: 1.35rem;
      box-shadow: 0 0 1em rgba(31, 31, 31, 0.4);
      border-radius: 8px;
      margin: 1rem 0 2rem;
      transition: transform 200ms ease-out, box-shadow 250ms ease;

      &:focus-within,
      &:hover {
        transition: transform 200ms ease-out, box-shadow 250ms ease,
          border-width 350ms ease-out;
        box-shadow: 0 0 1.2em rgba(31, 31, 31, 0.6);
        transform: scale(1.025);
        flex-wrap: 1;
      }

      .search-input {
        all: unset;
        background: rgba(232, 232, 232, 1);
        padding: 0.8em 0.5em;
        flex-grow: 1;
        height: 100%;
      }

      .submit-btn {
        all: unset;
        cursor: pointer;
        color: #666;
        background: rgba(232, 232, 232, 0.8);
        padding: 0.5em;
        border-radius: 0 8px 8px 0;

        &:hover {
          color: #333;
        }
      }
    }

    .search-box > span {
      background: rgba(232, 232, 232, 0.8);
      color: #333;
      font-weight: 600;
      display: grid;
      place-items: center;
      padding: 0 0.5em;
      border-radius: 8px 0 0 8px;
    }
  }

  @media (max-width: 740px) {
    .search-container .search-box {
      width: 65%;
    }
  }

  @media (max-width: 1348px) {
    .search-container .search-box {
      width: 55%;
    }
  }
`;
