import React, { useLayoutEffect} from 'react';
import VolunteerForm from '../Components/VolunteerForm';




export default function VolunteerFormPage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            
            <VolunteerForm />

            
        </>
    );
}