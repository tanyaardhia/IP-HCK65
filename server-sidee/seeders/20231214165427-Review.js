'use strict';
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let dataReview = JSON.parse(fs.readFileSync("./data/review.json", "utf-8")).map(
      (item) => {
        item.createdAt = new Date();
        item.updatedAt = new Date();
        return item;
      }
    );
    await queryInterface.bulkInsert("Reviews", dataReview);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Reviews", null, {});

  }
};
