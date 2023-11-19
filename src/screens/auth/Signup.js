import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Authnavbar from "./Authnavbar";

const Signup = () => {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username, password, role }

        setIsLoading(true)

        //make post request here
        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(user)
        }).then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                console.log(data)
                if (data.message === "User added") {
                    navigate('/auth/login');
                }
                else if (data.message === "user already exists") {
                    setError("User Already Exists");
                }
                else {
                    setError("Error Occured, Please Register Again")
                }

            }).catch((err) => {
                //setError(err.message);
                console.log(err.message)
            })

    }

    return (
        <>
        <Authnavbar/>
        <Container>
            <br></br>
            <Row>
                <Form.Label column="lg" lg={2}>
                    Email
                </Form.Label>
                <Col xs="auto">
                    <Form.Control size="lg" type="text" placeholder="Email" onChange={(e) => setName(e.target.value)}/>
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>
                    Password
                </Form.Label>
                <Col xs="auto">
                    <Form.Control size="lg" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Signup;