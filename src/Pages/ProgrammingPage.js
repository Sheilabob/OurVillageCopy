import React from 'react';
import IntergenElders from '../Components/IntergenElders';
import IntergenerationalProgramsTopEC from '../Components/IntergenerationalProgramsTopEC';
import IntergenYouth from '../Components/IntergenYouth';
import ProgramHero from '../Components/ProgramHero';
import ProgramLandandFarm from '../Components/ProgramLandandFarm';



export default function ProgrammingPage() {
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