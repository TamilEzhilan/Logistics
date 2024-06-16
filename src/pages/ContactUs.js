import React, { useState } from 'react';
import './ContactUs.css'; // Import ContactUs-specific CSS file

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
                console.log('Email:', email);
        console.log('Description:', description);
               setEmail('');
        setDescription('');
    };

    return (
        <div className="contact-us-page">
            <h1>Contact Us</h1>
            <p>
                Have questions or inquiries? Reach out to us using the form below or contact information provided.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows="5"
                        placeholder="Enter your message or inquiry"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
