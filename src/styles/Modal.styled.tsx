import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 300px;
  width: 600px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation-name: rotate;
  animation-duration: 0.9s;

  @keyframes rotate {
    0% {
      transform: perspective(600px) translate(-50%, -50%) rotateY(-180deg);
    }
    100% {
      transform: perspective(600px) translate(-50%, -50%) rotateY(0);
    }
  }


  & h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const ModalName = styled.h2``
export const Article = styled.h3`
font-weight: bolder;
`


export const Description = styled.p``