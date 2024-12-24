import React from 'react';
import Header from './Header';
import Features from './Features';
import ContactForm from './ContactForm';

const App = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <Features />
            <ContactForm />
        </div>
    );
};

export default App;
