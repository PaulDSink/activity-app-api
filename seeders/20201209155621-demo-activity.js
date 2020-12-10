'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let activities = await queryInterface.bulkInsert("Activities", [
      { name: "Mountain Biking" },
      { name: "Hiking" },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
