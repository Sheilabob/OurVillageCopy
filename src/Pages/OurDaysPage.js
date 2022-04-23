import React, { useLayoutEffect} from 'react';
import OurDaysPics from '../Components/OurDaysPics';




export default function OurDaysPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <OurDaysPics />
            

            
        </>
    );
}