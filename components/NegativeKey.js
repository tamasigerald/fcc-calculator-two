import { useContext } from 'react';

import { Button } from './Button';
import { NumberContext } from './NumberProvider';


export default function Negative() {
    const { handleToggleNegative } = useContext(NumberContext);

    return (
        <Button type="button" className="white-button" onClick={() => handleToggleNegative()}>
            - /+
        </Button>
    );
}