import { useContext } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

import { NumberContext } from './NumberProvider';

export default function Number({value, id}) {
    const { handleSetDisplayValue } = useContext(NumberContext);

    return (
        <Button id={id} type='button' onClick={() =>  handleSetDisplayValue(value)}>
            {value}
        </Button>
    )
}