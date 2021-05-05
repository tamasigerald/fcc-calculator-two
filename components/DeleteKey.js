
import { useContext } from 'react';

import { Button } from './Button';
import { NumberContext } from './NumberProvider';


export default function Delete() {
    const { handleBackButton } = useContext(NumberContext);

    return(
        <Button onClick={() => handleBackButton()}>
            &#8592;
        </Button>
    )
}