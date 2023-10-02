import { css } from 'emotion';
import { color } from '../../index';

export const boxCard = css`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  svg {
    padding: 20px;
  }
  .cards {
    display: flex;
  }

  .card {
    background: ${color['n-10']};
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .image {
      background: ${color['n-0']};
      border-radius: 5px 5px 0 0;
      svg {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      border-bottom: solid 1px ${color['n-30']};
    }

    .content {
      padding: 20px 30px;
    }
  }

  .card.is-loading {
    .image,
    h2,
    h3,
    h4,
    p {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }

    .image {
      height: 200px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h2,
    h3,
    h4 {
      height: 30px;
      margin-bottom: 10px;
    }

    p {
      height: 70px;
    }
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
