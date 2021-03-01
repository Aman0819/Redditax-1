import styled from 'styled-components';
import { rgba } from 'polished';

export default styled.div`
  --transition-delay: 200ms;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ theme }) => theme.cardSize}, 1fr)
  );
  place-items: center;
  gap: 4em 2em;
  max-width: 90%;
  margin: 5rem auto;
  color: #333;

  @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    max-width: 75%;
  }

  img {
    max-width: 100%;
  }

  // Card
  .card {
    position: relative;
    width: ${({ theme }) => theme.cardSize};
    text-decoration: none;
    cursor: pointer;
  }

  .rank {
    position: absolute;
    font-weight: bold;
    font-size: 1.5rem;
    top: -0.02em;
    right: 0.85em;
    background: ${({ theme }) => rgba(theme.palette.secondaryDark, 0.7)};
    color: #fafafa;
    clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
    padding: 0.5em 0.5em 0.75em;
    transition: all 250ms ${({ theme }) => theme.trasition1}
      var(--transition-delay);
  }

  .front {
    transition: all 200ms ${({ theme }) => theme.trasition1}
      var(--transition-delay);
    background: transparent;

    .img-main {
      min-height: 360px;
      max-height: 360px;
      width: 100%;
      object-fit: cover;
      object-position: 0;
      border-radius: 1em;
    }

    .sr-name {
      margin: 0.75em 0;
      padding: 0;
      font-size: 1.75rem;
      border-radius: calc(${({ theme }) => theme.br} - 0.5em);
      animation: srName 300ms forwards;
    }

    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sr-subs {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .reddit-logo {
      i {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.palette.reddit};
      }
    }
  }

  .back {
    opacity: 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 300ms ${({ theme }) => theme.trasition1}
      var(--transition-delay);

    .sr-details {
      line-height: 1.4;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.5em;

      span {
        display: block;
      }

      .sr-caption {
        color: ${({ theme }) => theme.palette.primary};
        margin: 1em 0 1.5em;
        text-align: justify;
      }
    }

    .reddit-logo {
      p {
        margin: 0.2em 0;
      }

      i {
        font-size: 3.5rem;
        color: ${({ theme }) => theme.palette.reddit};
      }
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.br};
    z-index: -1;
    transform: scale(0, 0.5);
    opacity: 0;
    transition: all 250ms ${({ theme }) => theme.trasition1}
        var(--transition-delay),
      opacity 100ms linear var(--transition-delay);
  }

  .card:hover {
    .rank {
      opacity: 0;
    }

    .front {
      transform: translateY(-30%) scale(0.7);

      .sr-name {
        font-size: 3rem;
        margin: 0.5em 0;

        @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
          font-size: 2.5rem;
        }
      }

      .details {
        display: none;
      }
    }

    .back {
      opacity: 1;

      .sr-details {
        font-size: 1.25rem;

        @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
          font-size: 1.1rem;
        }

        .sr-sub-count {
          font-size: 1.7rem;

          @media (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
            font-size: 1.25rem;
          }
        }
      }
    }

    .background {
      transform: scale(1.1, 1.05);
      opacity: 1;
      box-shadow: 0 0 1em ${rgba('#000000', 0.3)};

      .rank {
        background: ${({ theme }) => rgba(theme.palette.secondaryDark, 0.8)};
        opacity: 1;
      }
    }
  }

  @keyframes srName {
    0% {
      text-align: left;
      opacity: 1;
      background: none;
    }

    20% {
      text-align: left;
      opacity: 0;
    }

    40% {
      text-align: center;
      opacity: 0;
      transform: scale(1.2);
    }

    100% {
      text-align: center;
      opacity: 1;
    }
  }
`;

const Header = styled.h4`
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondaryDark};
  margin: 0 auto;
  padding: 1em 0 0.5em;
`;

export { Header };
