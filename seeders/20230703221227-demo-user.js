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

      }

    ])

  },

  async down(queryInterface, Sequelize) {

  }

};
