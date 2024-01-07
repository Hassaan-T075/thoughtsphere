import React from 'react';

const Policy = () => {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f8f8',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        color: '#333',
        borderBottom: '2px solid #333',
        paddingBottom: '10px',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        lineHeight: '1.6',
        color: '#666',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Privacy Policy</h1>

            <p style={paragraphStyle}>
                Welcome to ThoughtSphere! We are committed to protecting your privacy
                and ensuring you have a positive experience while using our services.
            </p>

            <h2 style={headingStyle}>1. Information We Collect</h2>

            <p style={paragraphStyle}>
                We may collect personal information such as your name, email address, and other relevant details
                when you register an account or interact with our Website.
            </p>

            <h2 style={headingStyle}>2. How We Use Your Information</h2>

            <p style={paragraphStyle}>
                We use the information we collect for various purposes, including but not limited to providing
                and improving our services, communicating with you, and ensuring the security of your account.
            </p>

            <h2 style={headingStyle}>3. Cookies and Tracking Technologies</h2>

            <p style={paragraphStyle}>
                Our Website uses cookies and similar tracking technologies to enhance your experience and collect
                information about how you use our services. You can manage your cookie preferences through your browser settings.
            </p>

            <h2 style={headingStyle}>4. Third-Party Links and Services</h2>

            <p style={paragraphStyle}>
                Our Website may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these third parties, and we encourage you to review their privacy policies.
            </p>

            <h2 style={headingStyle}>5. Security</h2>

            <p style={paragraphStyle}>
                We take reasonable measures to protect your personal information from unauthorized access, disclosure,
                alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 style={headingStyle}>6. Changes to Privacy Policy</h2>

            <p style={paragraphStyle}>
                We reserve the right to update this privacy policy to reflect changes to our practices or for other operational,
                legal, or regulatory reasons. We will notify you of any changes through the Website or other means.
            </p>

            <h2 style={headingStyle}>7. Contact Us</h2>

            <p style={paragraphStyle}>
                If you have any questions or concerns about our privacy practices, please contact us at <strong><a href="mailto:thoughtsphere@gmail.com">thoughtsphere@gmail.com</a></strong>
            </p>

            <p style={paragraphStyle}>
                Find us on Google Maps: <strong><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Visit Us</a></strong>
            </p>

            <p style={paragraphStyle}>
                This privacy policy was last updated on January 1, 1970.
            </p>
        </div>
    );
};

export default Policy;
