import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from "react-bootstrap";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     function simulateNetworkRequest() {
    //         return new Promise((resolve) => setTimeout(resolve, 2000));
    //     }

    //     if (isLoading) {
    //         simulateNetworkRequest().then(() => {
    //             setLoading(false);
    //         });
    //     }
    // }, [isLoading]);

    const handleClick = (e) => {

        e.preventDefault();
        const body = { email, password };
        console.log(email, password)
        setLoading(true)

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then((response) => response.json())
        .then((data) => {
            // userdata.token = data.token
            // userdata.username = username
            // userdata.password = password
            setLoading(false);
        if(data.msg === 'Success')
        {
                console.log("Logged In");
                navigate('/');   
        }
        else 
        {
            setError(data.msg);
        }
            // console.log(userdata.token)
            console.log('logged in');   
            console.log(data);
           
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <>
            <AuthNavbar />
            <br />
            <Container className="p-5 border border-info rounded-pill">
                <br />
                <Row className="justify-content-md-center">
                    <Form.Label column="lg" lg={2}>
                        Email
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Form.Label column="lg" lg={2}>
                        Password
                    </Form.Label>
                    <Col xs="auto">
                        <Form.Control size="lg" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
                            {isLoading ? 'Loading…' : 'Log in'}
                        </Button>
                    </Col>
                    <label>{error}</label>
                </Row>

            </Container>
        </>
    );
}

export default Login;