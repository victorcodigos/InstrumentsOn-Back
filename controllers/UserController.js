const { User, Token, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const orden = require('../models/orden.js');
const product = require('../models/product.js');
const { jwt_secret } = require("../config/config.json")["development"]
const { Op } = Sequelize;


const UserController = {

    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
            .then(user => res.status(201).send({ message: 'User created successfully!', user }))
            .catch((error) => {
                console.error(error);
                res.status(500).send({ message: "There has been a problem"});
            });
       
    },

    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: "Incorrect username or password!" })
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: "Incorrect username or password" })
            }
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id }).then(
                res.send({ token, user })
            ).catch(err => {
                console.error(err);
                res.status(500).send(err)
            })

        })
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]:
                        [{ UserId: req.user.id },
                        { token: req.headers.authorization }
                        ]
                }
            });
            res.send({ message: "Successfully disconnected" })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: "There was a problem trying to log you out" })
        }
    },
    getById(req, res) {
        User.findByPk(req.params.id, {
        })
          .then((user) => res.send(user))
          .catch((err) => {
            console.error(err);
            res.status(500).send(err);
          });
      },
}

module.exports = UserController;
