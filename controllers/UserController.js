const { User , Token, Sequelize} = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;


const UserController = {

    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
            .then(user => res.status(201).send({ message: 'User created successfully!', user }))
            .catch(err => console.error(err))

    },

    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
            }
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({token,UserId:user.id}).then(
                res.send({token,user})
            ).catch(err => {
                console.error(err);
                res.status(500).send(err)
            })

        })
    },

}

module.exports = UserController;
