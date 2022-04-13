import React, { useLayoutEffect} from 'react';
import IntergenElders from '../Components/IntergenElders';
import IntergenerationalProgramsTopEC from '../Components/IntergenerationalProgramsTopEC';
import IntergenYouth from '../Components/IntergenYouth';
import ProgramHero from '../Components/ProgramHero';
import ProgramLandandFarm from '../Components/ProgramLandandFarm';




export default function ProgrammingPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <ProgramHero />
            <IntergenerationalProgramsTopEC />
            <IntergenYouth />
            <IntergenElders />
            <ProgramLandandFarm />
            
            

            
        </>
    );
}