const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');


const UserController = {

    create(req, res) {
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
            .then(user => res.status(201).send({ message: 'User created successfully!', user }))
            .catch(err => console.error(err))

    },

}

module.exports = UserController;
