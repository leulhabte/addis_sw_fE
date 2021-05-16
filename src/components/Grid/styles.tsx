import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%:
  padding: 0;
  margin: 0;
  color: #88888;
  box-shadow: 3px 3px 5px 0px #ccc;
  @media (max-width: 768px) {
    justify-content: center;
};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`