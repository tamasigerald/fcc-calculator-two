import styled from "styled-components";
import Clear from "./ClearKey";
import Delete from "./DeleteKey";
import Equal from "./EqualKey";
import Function from "./FunctionKey";
import Negative from "./NegativeKey";

import Number from './NumberKey';

export default function Buttons() {
    return(
        <Wrapper>
            <Clear id="clear" />
            <Delete />
            <Negative />
            <Function id="divide" value="/" />
            <Number id="seven" value={7} />
            <Number id="eight" value={8} />
            <Number id="nine" value={9} />
            <Function id="multiply" value="*" />
            <Number id="four" value={4} />
            <Number id="five" value={5} />
            <Number id="six" value={6} />
            <Function id="subtract" value="-" />
            <Number id="one" value={1} />
            <Number id="two" value={2} />
            <Number id="three" value={3} />
            <Function id="add" value="+" />
            <Number id="zero" value={0} />
            <Number id="decimal" value="." />
            <Equal id="equals" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 2rem;
    height: calc(100% - 70px - 2rem);
    width: 100%;
`