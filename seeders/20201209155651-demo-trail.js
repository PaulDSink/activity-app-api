'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let trails = await queryInterface.bulkInsert("Trails", [
      {
        name: "Brown Wave",
        locationId: 1,
        length: "5.8 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Skinny",
        locationId: 1,
        length: "6 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Great Wall",
        locationId: 1,
        length: "7.5 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deep Step",
        locationId: 1,
        length: "5 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Big Rock",
        locationId: 1,
        length: "4 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tower",
        locationId: 1,
        length: "4 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cliatt Creek Nature Trail Loop",
        locationId: 2,
        length: "3.75 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Canyon Trail Loop",
        locationId: 2,
        length: "1/3 mile",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Office Trail",
        locationId: 2,
        length: "0.5 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beach Trail",
        locationId: 2,
        length: "1.9 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Campground Loop Trail",
        locationId: 2,
        length: "1.5 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rock Dam Trail",
        locationId: 2,
        length: "6.25 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rock Dam Return Loop Trail",
        locationId: 2,
        length: "1 mile",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cottage Trail",
        locationId: 2,
        length: "1/3 mile",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mountain Bike Singletrack",
        locationId: 3,
        length: "2 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Outer Loop",
        locationId: 4,
        length: "8.7 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Bluff Trail",
        locationId: 4,
        length: "0.9 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Firebreak Trail",
        locationId: 4,
        length: "4.4 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stewardship Trail",
        locationId: 4,
        length: "3.4 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crooked Pine",
        locationId: 4,
        length: "0.8 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spider Woman II",
        locationId: 4,
        length: "1.8 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spider Woman II - Inner Loop",
        locationId: 4,
        length: "0.7 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lost Creek",
        locationId: 4,
        length: "4.5 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Midlands Mountain Trail",
        locationId: 4,
        length: "4.1 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Firebreak to Stewardship - Spiderwoman - Midlands Mountain Junction",
        locationId: 4,
        length: "0.2 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Firebreak Connector",
        locationId: 4,
        length: "0.9 miles",
        createdAt: new Date(),
        updatedAt: new Date(),
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
