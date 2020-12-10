'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let activityLocations = await queryInterface.bulkInsert("ActivityLocations", [
      {
        activityId: 1,
        locationId: 1
      },
      {
        activityId: 1,
        locationId: 2
      },
      {
        activityId: 1,
        locationId: 3
      },
      {
        activityId: 1,
        locationId: 4
      },
      {
        activityId: 2,
        locationId: 1
      },
      {
        activityId: 2,
        locationId: 2
      },
      {
        activityId: 2,
        locationId: 3
      },
      {
        activityId: 2,
        locationId: 4
      }
    ])
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
