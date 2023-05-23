const { google } = require('googleapis');
const cors = require('cors');


const CLIENT_ID = '412603416347-732069pdtqlhlo5jgcj6cgp6u57nj3am.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

/*const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send'], // Adjust the scope as per your requirements
});

console.log('Authorize this app by visiting the following URL:');
console.log(authorizeUrl);*/

const authorizationCode = '4%2F0AbUR2VPIfQqUoud2ZIYxiJmV34zCb_Tx7c0p0oVYfx9naMRxwr7w9ELVLOqKFlevgG1TJQ'; // Replace with the actual authorization code you obtained

async function getRefreshToken() {
    const { tokens } = await oAuth2Client.getToken(authorizationCode);
    const refreshToken = tokens.refresh_token;
    console.log('Refresh Token:', refreshToken);
    // Store the refresh token securely for later use
}

getRefreshToken();