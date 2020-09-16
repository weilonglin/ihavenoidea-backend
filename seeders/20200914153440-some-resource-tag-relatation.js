"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "resourceTags",
      [
        {
          tagId: 1,
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          resourceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          resourceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          resourceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 10,
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 9,
          resourceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          resourceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 11,
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 9,
          resourceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          resourceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 6,
          resourceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 10,
          resourceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("resourceTags", null, {});
  },
};
