import React from "react";
import { Container, Row, Col, Form, FormGroup, FormControl, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';


export default function VolunteerForm() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        surName: '',
        email: '',
        message: '',
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {
        console.log(`Form State: ${JSON.stringify(formData)}`);
        alert(`Form State: ${JSON.stringify(formData)}`);
    }

    function handleClear() {
        setFormData({
            firstName: '',
            surName: '',
            email: '',
            message: '',
        });
        console.log(formData);
    };  

    return (

        <Container className="m-5">


        <h1>Stewards of the Land/Volunteers</h1>
        <h3>Join us!</h3>
        <h5>Connect with us to explore volunteer opportunities.</h5>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                                <hr />
                                <FormGroup controlId="firstName">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl
                                        model='.firstName'
                                        id='firstName'
                                        name='firstName'
                                        placeholder='First Name'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.firstName}
                                    />
                                </FormGroup>
                                <FormGroup controlId="surName" >
                                    <FormLabel>Surname</FormLabel>
                                    <FormControl
                                        model='.surName'
                                        id='surName'
                                        name='surName'
                                        placeholder='Surname'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.surName}
                                    />
                                </FormGroup>
                                <FormGroup controlId="email" >
                                    <FormLabel>Email</FormLabel>
                                    <FormControl
                                        model='.email'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </FormGroup>
                                <FormGroup controlId="message" >
                                    <FormLabel>Message</FormLabel>
                                    <FormControl
                                        model='.message'
                                        id='message'
                                        name='message'
                                        placeholder='Message'
                                        type="text"
                                        onChange={handleChange}
                                        value={formData.message}
                                    />
                                </FormGroup>
                               
                                <hr />
                                <button onPress={handleClear} type='reset'>Clear</button>
                                <button type='submit'>Send</button>
                        </Form>
                    </Col>
                    
                </Row>
        </Container>
    );
}