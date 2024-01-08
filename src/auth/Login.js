import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from "react-bootstrap";
import { useDispatch } from 'react-redux';
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
                    username: data.profile.username,
                    token: data.token,
                    social: data.profile.social,
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
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6} className="bg-light p-4 rounded shadow">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" block disabled={isLoading} onClick={!isLoading ? handleClick : null} className="mb-3">
                                {isLoading ? 'Loading…' : 'Log in'}
                            </Button>

                            {error && <Form.Text className="text-danger">{error}</Form.Text>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;