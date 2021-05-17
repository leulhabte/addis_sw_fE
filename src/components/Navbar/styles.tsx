import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%:
  padding: 0;
  margin: 0;
  color: #88888;
  box-shadow: 3px 3px 5px 0px #ccc;
`;
export const Logo = styled.div`
  margin-left: 30px;
  font-size: 1.3em;
  font-weight: 700
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItem = styled.button`
  margin-right: 30px;
  font-size: 1em;
  padding: 5px;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 5px -3px #ccc;
  font-weight: 700;
  &:hover {
    transform: scale(1.06);
    transition: transform 200ms ease-in;
};
`;