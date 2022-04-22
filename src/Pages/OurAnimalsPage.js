import React, { useLayoutEffect} from 'react';
import AnimalHero from '../Components/AnimalHero';
import OurAnimals from '../Components/OurAnimals';
import OurAnimalsDonation from '../Components/OurAnimalsDonation';




export default function OurAnimalsPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <OurAnimals />
            <OurAnimalsDonation />
            <AnimalHero />
            

            
        </>
    );
}