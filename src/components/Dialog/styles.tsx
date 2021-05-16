import styled from 'styled-components';

export const Modal = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 300px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(55% - 250px);
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
export const ModalFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-item: center;
`;
export const ConfirmButton = styled.button`
    color: white;
    background-color: ${({ color }) => color || "red"};
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 5px -3px #ccc;
    &:hover {
        background-color: darkgreen;
    };
    width: 20%;
    height: 30px;
    margin: 0px 4px
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