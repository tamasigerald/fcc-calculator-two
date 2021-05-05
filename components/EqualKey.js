import { useContext } from 'react';

import { Button } from './Button';
import { NumberContext } from './NumberProvider';

export default function Equal({id}) {
    const { doMath } = useContext(NumberContext);

    return (
        <Button id={id} onClick={() => doMath()}>
            =
        </Button>
    )
}