import styled from "styled-components";

export const Button = styled.div`
  .button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: var(--color-6);
    color: white;
    padding: 0.75rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  .button:hover,
  .button:active {
    background-color: var(--color-5);
  }

  .icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  .badge {
    background-color: var(--color-3);
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  .button:hover .badge,
  .button:active .badge {
    background-color: var(--color-2);
  }

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
