const jwt = require('jsonwebtoken');

/**
 * Check token sent by user for authorization
 * @param {Request} req
 * @param {Result} res
 * @param {Function} next
 * @returns
 */
exports.checkToken = function (req, res, next) {
    let token = req.header('token');
    if(!token) { return res.status(401).json({message: 'Auth Error'});}
    try{
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (e) {
        console.log(e)
        res.status(401).send({message: 'Invalid Token'});
    }
}