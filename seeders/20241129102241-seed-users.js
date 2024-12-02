'use strict'

/** @type {import('sequelize-cli').Migration} */

const usersData = [
  { username: 'alex12345678', email: 'alex@gmail.com', age: 32 },
  { username: 'sasha1234567', email: 'sasha@gmail.com', age: 30 },
  { username: 'pamela123456', email: 'pamela@gmail.com', age: 28 }
]

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', usersData)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null)
  }
}
