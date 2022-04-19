import React, { useLayoutEffect} from 'react';
import FutureProgramPics from '../Components/FutureProgramPics';




export default function FutureProgramsPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <FutureProgramPics />
            

            
        </>
    );
}