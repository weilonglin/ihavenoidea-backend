"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "votes",
      [
        {
          userIp: "1",
          resourceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "2",
          resourceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "3",
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "4",
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "5",
          resourceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "6",
          resourceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "7",
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "8",
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userIp: "9",
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("votes", null, {});
  },
};
