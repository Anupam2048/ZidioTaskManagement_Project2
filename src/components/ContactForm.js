import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us!');
    };

    return (
        <section style={{ padding: '20px', backgroundColor: '#121212', borderRadius: '8px', margin: '20px auto', maxWidth: '600px' }}>
            <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#1a1a1a', color: '#fff' }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#1a1a1a', color: '#fff' }}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100px' }}
                    required
                ></textarea>
                <button
                    type="submit"
                    style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#004080', color: '#fff', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
