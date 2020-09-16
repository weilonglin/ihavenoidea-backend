const resourcetag = require("../models/resourcetag");
const vote = require("../models/vote");
const sequelize = require("sequelize");
const resolvers = {
  Query: {
    async resource(root, {
      id
    }, {
      models
    }) {
      return models.resource.findByPk(id);
    },
    async allResource(root, _, {
      models
    }) {
      const allResources = await models.resource.findAll({

        include: [{
          model: models.subject,
          as: "category"
        }, {
          model: models.tag,
          as: "tags",
        }, {
          model: models.vote,
          as: "vote",


        }],

      })


      return allResources
    },




    async allCategories(root, _, {
      models
    }) {
      return models.subject.findAll();
    },
    async allTags(root, _, {
      models
    }) {
      return models.tag.findAll();
    },
    async allVotes(root, {
      userIp
    }, {
      models
    }) {

      const findIp = await models.vote.findAll({
        where: {
          userIp
        }
      });
      return findIp
    },

  },

  Mutation: {
    addResource: async (_, {
      input
    }, {
      models
    }) => {
      try {
        const {
          name,
          link,
          description,
          category,
          resourcetag,
        } = input

        const {
          id
        } = await models.subject.findOne({
          where: {
            name: category
          },
        })
        const addResource = await models.resource.create({
          name,
          link,
          description,
          subjectId: id,
        })

        const addTags = resourcetag.map(async (tag) => {
          const findTag = await models.tag.findOne({
            where: {
              name: tag
            }
          })

          if (findTag === null) {
            const createTag = await models.tag.create({
              name: tag
            })
            console.log("idxxxxxxxxxxxx", id)
            const resourceTag = await models.resourceTag.create({
              tagId: createTag.id,
              resourceId: addResource.id
            })
          } else {
            const resourceTag = await models.resourceTag.create({
              tagId: findTag.id,
              resourceId: addResource.id
            })
          }
        })
        return true
      } catch (e) {
        throw e
      }
    },
    addVote: async (_, {
      userIp,
      resourceId
    }, {
      models
    }) => {
      const createVote = await models.vote.create({
        userIp,
        resourceId
      })
      return true
    },
    removeVote: async (_, {
      id
    }, {
      models
    }) => {
      const removeVote = await models.vote.destroy({
        where: {
          id
        }
      })
      return true
    }

  },
  // Resource: {
  //   async category(subject) {
  //     return subject.getCategory();
  //   },
  //   async resourcetag(tag) {

  //     return tag.getTags().then(res => {
  //       return res.map(tag => tag.name)
  //     });
  //   },
  //   async vote(votes) {
  //     const lengthOf = await votes.getVotes();
  //     return lengthOf.length;
  //   },
  // },
};

module.exports = resolvers;