const graphql = require('graphql')

const {
  user,
  users
} = require('./api/users/schema')

const RootQueryType = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Métodos disponíveis',

  fields: () => ({
    user,
    users
  })
})

module.exports = new graphql.GraphQLSchema({
  query: RootQueryType
})
