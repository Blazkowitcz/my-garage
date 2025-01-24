const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

exports.signup = async (req, res) => {
    try{
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserService.addUser({
            email: email,
            password: hashedPassword,
        });
        return res.status(200).json(true);
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.signin = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await UserService.getUserByEmail(email);
        if (!user) {
            return res.status(401).send('Utilisateur non trouvé');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Mot de passe incorrect');
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '72h' });
        res.json(token);
    }catch(err){
        res.status(500).send(err.message);
    }
}