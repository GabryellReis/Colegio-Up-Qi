'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users',[
    {
      id: 1,
      name: "James Won",
      number: "99 9 9999-9999",
      cpf: "123.456.789-01"
    },
    {
      id: 2,
      name: "Larissa Lima",
      number: "88 8 8888-8888",
      cpf: "987.654.321-98"
    },
    {
      id: 3,
      name: "Beatriz Freitas",
      number: "77 7 7777-7777",
      cpf: "147.258.369-36"
    },
    {
      id: 4,
      name: "Breno Oliveira",
      number: "66 6 6666-6666",
      cpf: "951.753.654-84"
    },
  ]);
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
