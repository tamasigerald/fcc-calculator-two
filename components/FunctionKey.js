import { useContext } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

import { NumberContext } from './NumberProvider';

export default function Function({value, id}) {
    const { handleSetCalcFunction } = useContext(NumberContext);

    return (
        <Button id={id} type='button' onClick={() =>  handleSetCalcFunction(value)}>
            {value}
        </Button>
    )
}