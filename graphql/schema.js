const {
  gql
} = require("apollo-server");

const typeDefs = gql `
  type Resource {
    id: Int
    name: String
    link: String
    description: String
    category: Subject
    resourcetag: [String]
    vote: Int
    subjectId: Int
  }

  input ResourceInput {
    name: String
    link: String
    description: String
    category: String
    resourcetag: [String]
    subjectId: Int
  }

  type Tag {
    id: Int
    name: String
  }

  type Subject {
    id: Int
    name: String
  }

  type Vote {
    id: Int
    resourceId: Int
    userIp: String
  }

  type Mutation {
    addResource(input: ResourceInput): Boolean
    addVote(resourceId: Int, userIp: String): Boolean
    removeVote(id: Int): Boolean
  }

  type Query {
    resource(id: Int!): Resource!
    subject(id: Int!): Subject!
    allResource: [Resource]
    vote: [Vote]
    tag: [Tag]
    allCategories: [Subject]
    allTags: [Tag]
    allVotes(userIp: String): [Vote]
  }
`;

module.exports = typeDefs;