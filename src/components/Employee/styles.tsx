import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    box-shadow: 3px 3px 5px -3px #ccc;
    border-radius: 5px;
    width: auto;
    @media (min-width: 992px) {
        width: 470px;
    };
    @media (max-width: 768px) {
        width: 350px;
    };
`
export const Title = styled.p`
    font-size: 16px;
    font-weight: 700;
`
export const Typography = styled.p`
    font-size: 16px;
    font-weight: 500;
`
export const Box = styled.div`
    display: flex;
    justify-content: ${({ property }) => property || "space-between"};;
    align-items: center;
    margin: 10px 0px;
    width: auto;
`
export const Button = styled.button`
    color: white;
    background-color: ${({ color }) => color || "blue"};
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 5px -3px #ccc;
    &:hover {
        background-color: ${({ color }) => color || "darkblue"};
    };
    margin: 0px 4px
`