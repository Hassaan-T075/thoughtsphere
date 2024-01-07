import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { updateEmail, updateSocials, updateToken, updateUsername } from "../features/active/activeSlice";

const Signup = () => {

    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [facebook, setFacebook] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) => {

        const username = firstname;
        const social = { facebook, whatsapp }
        e.preventDefault() //prevents poge from refreshing
        const user = { username, password, email, social }

        setLoading(true)

        //make post request here
        fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(user) // 'stringify' converts 'blog object' into 'json string'
        }).then((response) => response.json())
            .then((data) => {
                setLoading(false);
                if (data.msg === 'Success') {
                    navigate('/auth/login');
                }
                else if (data.msg === 'User Already Exist. Please Login.') {
                    setError("User Already Exists");
                }
                else if (data.msg === 'All input is required') {
                    setError("All input is required");
                }
                else {
                    setError("Error Occured, Please Register Again")
                }




                // redux operations
                dispatch(updateEmail(data.profile.email))
                dispatch(updateUsername(data.profile.username))
                dispatch(updateToken(data.token))
                dispatch(updateSocials(data.profile.socials))

            }).catch((err) => {
                setError(err.message);

            })
    }

    return (
        <>
            <AuthNavbar />
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6} className="bg-light p-4 rounded shadow">
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form>
                            <Row className="mb-3">
                                <Col lg={6}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col lg={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control size="lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col lg={6}>
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)} />
                                </Col>
                                <Col lg={6}>
                                    <Form.Label>WhatsApp</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="WhatsApp" onChange={(e) => setWhatsapp(e.target.value)} />
                                </Col>
                            </Row>

                            <Row className="justify-content-md-center">
                                <Col lg={4} className="text-center">
                                    <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null} className="mb-3">
                                        {isLoading ? 'Loading…' : 'Sign up'}
                                    </Button>
                                </Col>
                            </Row>

                            {error && <Form.Text className="text-danger">{error}</Form.Text>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Signup;