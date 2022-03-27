import React from 'react';
import HomeHero from '../Components/HomeHero';
import MissionVisionGoals from '../Components/MissionVisionGoals';
import HomeLowerHero from '../Components/HomeLowerHero';
import HomeOurPrograms from '../Components/HomeOurPrograms';
import HomeHistory from '../Components/HomeHistory';
import HomeVolunteerHero from '../Components/HomeVolunteerHero';


export default function HomePage() {
    return (
        <>
            <HomeHero />
            <MissionVisionGoals />
            <HomeLowerHero />
            <HomeOurPrograms />
            <HomeHistory />
            <HomeVolunteerHero />
            

            
        </>
    );
}