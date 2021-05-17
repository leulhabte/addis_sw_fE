import styled from 'styled-components';

export const Modal = styled.div`
  max-width: auto;
  background-color: white;
  position: fixed;
  top: 200px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(55% - 340px);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 20px;
  padding: 10px 40px;
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

export const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: green;
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  text-align: center
`;