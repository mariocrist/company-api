const jwt = require('jsonwebtoken')

const verifyAdminRole = () => {
    return (req, res, next) => {
        const authHeader = req.get('Authorization');
        const token = authHeader.split(' ')[1];
        let revisarToken;
        try {
            revisarToken = jwt.decode(token);
        } catch (error) {
            error.statusCode = 500;
            throw error;
        }
        if (!revisarToken.rol) return res.sendStatus(401);
        const result = revisarToken.rol=="admin";
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyAdminRole