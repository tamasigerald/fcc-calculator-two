import { useContext } from 'react';

import { Button } from './Button';
import { NumberContext } from './NumberProvider';


export default function Clear({id}) {
    const { handleClearValue } = useContext(NumberContext);

    return(
        <Button id={id} onClick={() => handleClearValue()}>
            C
        </Button>
    )
}