import React, { useLayoutEffect} from 'react';
import OurAnimals from '../Components/OurAnimals';




export default function OurAnimalsPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <OurAnimals />
            

            
        </>
    );
}