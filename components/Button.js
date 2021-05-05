import styled, { css } from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    font-size: 2rem;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
        box-shadow: inset 0px 0px 5px #000;
    }

    ${props => props.id == 'equals' && css`
        grid-column: span 2;
        background-color: ${({ theme }) => theme.colors.primary};
    `}
    ${props => props.id == 'clear' && css`
        background-color: ${({ theme }) => theme.colors.red};
    `}
`