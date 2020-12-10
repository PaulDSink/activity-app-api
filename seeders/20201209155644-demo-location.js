'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let locations = await queryInterface.bulkInsert("Locations", [
      {
        name: "Forks Area Trail System",
        address: "Woodlawn Rd, 33.608398 82.079700, Clarks Hill, SC 29821",
        description: "The Forks Area Trail System (FATS) was designed with the mountain biking enthusiast in mind. Six stacked loops accessed from various locations, provide up to 34 miles of hiking or biking through a variety of topography and vegetation."
      },
      {
        name: "Mistletoe State Park",
        address: "3725 Mistletoe Rd, Appling, GA 30802",
        description: ""
      },
      {
        name: "Augusta Canal National Heritage Area",
        address: "1450 Greene Street, Suite 400, Augusta, GA 30901",
        description: "Hike or bike on the towpath edging the historic canal, which takes you past natural and urban landscapes, giving glimpses of wildlife, offering beautiful scenery, and surrounding you with nature and history."
      },
      {
        name: "Harbison State Forest",
        address: "5600 Broad River Rd, Columbia, SC 29212",
        description: "Over thirty one miles of roads and trails weave through the pine and hardwood forest, crossing wandering streams and descending through leafy glades to the Broad River."
      }
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
