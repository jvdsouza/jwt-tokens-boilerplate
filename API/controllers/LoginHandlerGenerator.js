const config = require('../config');
const jwt = require('jsonwebtoken');

class LoginHandler {
    login (req, res) {
        let username = req.body.username;
        let password = req.body.password;

        // Fetch user from DB using username

        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign(
                    { username },
                    config.SECRET,
                    { expiresIn: '24h' }
                );
                // Return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token,
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed, please check the request'
            });
        }
    }

    index (req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}

module.exports = {
    LoginHandler,
}