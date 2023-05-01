import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p><small><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque quae magnam aspernatur rerum officia aliquam, veniam nulla reprehenderit tenetur beatae velit impedit facere doloremque illum quo dolor odio totam.</i></small></p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;