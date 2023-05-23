const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const CLIENT_ID = '412603416347-732069pdtqlhlo5jgcj6cgp6u57nj3am.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const REFRESH_TOKEN = '';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (formData) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'dananzola@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const message = {
            from: 'dananzola@gmail.com',
            to: 'dananzola@gmail.com',
            subject: 'New Form Submission',
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
        };

        const info = await transporter.sendMail(message);
        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

app.post('/send-email', (req, res) => {
    const formData = req.body;
    sendEmail(formData);

    res.status(200).json({ message: 'Email sent successfully' });
});



app.listen(3001, () => {
    console.log('Server is running on port 3001');
});