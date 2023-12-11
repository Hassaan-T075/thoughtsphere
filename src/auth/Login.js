import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from "react-bootstrap";
import {  useDispatch } from 'react-redux';
// import userdata from "../services/Credentials";
import { updateEmail, updateToken, updateUsername } from "../features/active/activeSlice";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleClick = (e) => {

        e.preventDefault();
        const body = { email, password };
        setLoading(true)

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then((response) => response.json())
            .then((data) => {
               
                dispatch(updateEmail(data.profile.email))
                dispatch(updateUsername(data.profile.username))
                dispatch(updateToken(data.token))

                const userdata = {
                    email: data.profile.email,
                    username : data.profile.username,
                    token: data.token,
                    socials: data.profile.socials,
                    followers: data.profile.followers.length,
                    followings: data.profile.followings.length,
                }

                localStorage.setItem('userdata', JSON.stringify(userdata))

                setLoading(false);
                if (data.msg === 'Success') {

                    navigate('/');
                }
                else {
                    setError(data.msg);
                }
              

            }).catch((err) => {
                alert(err.message)
              
            })

    }

    return (
        <>
            <AuthNavbar />
            <br />
            <Container className="p-5 border" style={{ borderColor: '#ADD8E6' }}>
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