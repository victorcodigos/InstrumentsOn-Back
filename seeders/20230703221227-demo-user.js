'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

module.exports = {

  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [

      {

        name: 'John',

        email: 'example@example.com',

        password: '123456',

        role: 'user',

        createdAt: new Date(),

        updatedAt: new Date()

      },
      {

        name: 'Victor',

        email: 'victor@thebridge.com',

        password: '123456xxx',

        role: 'user',

        createdAt: new Date(),

        updatedAt: new Date()

      },
      {

        name: 'Karolina',

        email: 'karolina@yahoo.com',

        password: '123456yyy',

        role: 'user',

        createdAt: new Date(),

        updatedAt: new Date()

      },
      {

        name: 'Maria',

        email: 'maria@hotmail.com',

        password: '123456kkk',

        role: 'user',

        createdAt: new Date(),

        updatedAt: new Date()

      },
      {

        name: 'Nilza',

        email: 'nilza@gmail.com',

        password: '123456zzz',

        role: 'user',

        createdAt: new Date(),

        updatedAt: new Date()

      },



    ])

  },

  async down(queryInterface, Sequelize) {

  }

};
