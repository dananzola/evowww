import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c5234pq', 'template_2kvv8rs', e.target, 'riP2GHBEq6HYR7nqr')
            .then((result) => {
                console.log(result.text);
                // Reset form after sending email
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group m-1">
                <input type="text" className="form-control" id="transBG" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div className="form-group m-1">
                <input id="transBG" type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="form-group m-1">
                <input id="transBG" type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            </div>
            <div className="form-group m-1">
                <textarea id="transBG" className="form-control" rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Leave us a short message." required ></textarea>
            </div>
            <div className="button-container">
                <button type="submit" className="btn-white span-angle m-0" id="titles" >
                    <h5>send</h5>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;