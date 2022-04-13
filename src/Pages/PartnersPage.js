import React, { useLayoutEffect } from 'react';
import CommPartInfo from '../Components/CommPartInfo';
import PartnerHero from '../Components/PartnerHero';




export default function ProgrammingPage() {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <PartnerHero />
            <CommPartInfo />
            
            

            
        </>
    );
}