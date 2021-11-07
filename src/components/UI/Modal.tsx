import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Backdrop from "./Backdrop";

const StyledModal = styled.div`
  position: fixed;
  top: 5vh;
  left: 15%;
  width: 70%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface Props {
  children: React.ReactNode;
  isModalShow?: boolean;
  onClick: () => void;
}
const Modal: React.FC<Props> = ({ children, onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onClick={onClick} />

          <StyledModal>
            <div className="content">{children}</div>
          </StyledModal>
        </>,
        document.getElementById("overlays") as HTMLElement
      )}
    </>
  );
};

export default Modal;
