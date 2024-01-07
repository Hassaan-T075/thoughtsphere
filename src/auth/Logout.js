import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    // Use useEffect to clear userdata and redirect to the login page when the component mounts
    useEffect(() => {
        localStorage.removeItem('userdata');
        navigate('/auth/login'); // Redirect to the login page
    }, [navigate]);

    return (
        <>
        </>
    );
}

export default Logout;