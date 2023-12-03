import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from "react-bootstrap";

const Signup = () => {

    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [discord, setDiscord] = useState('');
    const [reddit, setReddit] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {

        const username = firstname;
        const social = {reddit, discord}
        e.preventDefault() //prevents poge from refreshing
        const user = { username, password, email, social}

        setLoading(true)

        //make post request here
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(user) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => {            
                setLoading(false);
                if(response.status === 200)
                {
                    navigate('/');
                }
                else if(response.status === 409)
                {
                    setError("User Already Exists");
                }
                else 
                {
                    setError("Error Occured, Please Register Again")
                }
               
            }).catch((err) => {
                setError(err.message);
                console.log(err.message)
            })
    }

    return (
        <>
            <AuthNavbar />
            <br/>
            <Container className="p-5 border border-info rounded-pill">
                <br/>
                <Row className="justify-content-md-center">
                    <Form.Label column="lg" lg={2}>
                        First Name
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="Fname" onChange={(e) => setFname(e.target.value)} />
                    </Col>
                    <Form.Label column="lg" lg={2}>
                        Last Name
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="Lname" onChange={(e) => setLname(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Form.Label column="lg" lg={2}>
                        Email
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                    <Form.Label column="lg" lg={2}>
                        Password
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Form.Label column="lg" lg={2}>
                        Discord
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="discord" onChange={(e) => setDiscord(e.target.value)} />
                    </Col>
                    <Form.Label column="lg" lg={2}>
                        Reddit
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="reddit" onChange={(e) => setReddit(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button
                            variant="outline-info"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                        >
                            {isLoading ? 'Loading…' : 'Sign up'}
                        </Button>
                    </Col>
                    <label>{error}</label>
                </Row>

            </Container>
        </>
    );
}

export default Signup;