import styled from 'styled-components';

export const Modal = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
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
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-item: center;
`;
export const ConfirmButton = styled.button`
    color: white;
    background-color: green;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 5px -3px #ccc;
    &:hover {
        background-color: darkgreen;
    };
    width: 40%;
    height: 40px;
    margin: 0px 4px
`;
export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
export const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: blue;
  color: white;
  padding: 20px;
`;
export const Input = styled.input`
  width: 90%;
  margin-left: 15px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px
`;

export const Select = styled.select`
  width: 90%;
  margin-left: 15px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px
`;
export const Optgroup = styled.optgroup``;
export const Option = styled.option``;
export const MainButton = styled.button``;