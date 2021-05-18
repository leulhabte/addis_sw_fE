import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 100%:
  padding: 0;
  margin: 0;
  color: #88888;
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