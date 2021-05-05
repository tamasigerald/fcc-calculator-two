import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components";

import { NumberContext } from './NumberProvider';


export function Display() {
    const { number, storedNumber, functionType } = useContext(NumberContext);

    const Calculus = () => {
        if (!storedNumber && number === '') {
            return 0;
        } else {
            return `${storedNumber} ${functionType} ${number}`;
        }
    }


    return(
        <DisplayWrap>
            <ResultScreen>
            {!number.length && !storedNumber ? 0 : number || storedNumber}
            </ResultScreen>
            <CalculusScreen id="display">
            {/* {!storedNumber ? number : `${storedNumber} ${functionType} ${number}`} */}
            {Calculus()}
            </CalculusScreen>
        </DisplayWrap>
    )
}

const DisplayWrap = styled.div`
    height: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.body};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1;
    padding: 0 1.5rem;
    padding-bottom: 1rem;
    height: 70px;
    width: 100%;
`

const ResultScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 3rem;
    height: 70%;
    width: 100%;

`

const CalculusScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 100%;

`