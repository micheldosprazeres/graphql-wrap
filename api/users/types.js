const graphql = require('graphql')
const moment = require('moment')

module.exports.userType = new graphql.GraphQLObjectType({
  name: 'User',
  description: 'Definição da entidade usuário',
  fields: {
    id: {
      type: graphql.GraphQLID,
      description: 'Identificador único'
    },
    name: {
      type: graphql.GraphQLString,
      description: 'Nome do usuário'
    },
    username: {
      type: graphql.GraphQLString,
      description: 'Apelido do usuário'
    },
    email: {
      type: graphql.GraphQLString,
      description: 'E-mail do usuário'
    },
    phone: {
      type: graphql.GraphQLString,
      description: 'Telefone do usuário'
    },
    website: {
      type: graphql.GraphQLString,
      description: 'Website do usuário'
    },
    createdAt: {
      type: graphql.GraphQLString,
      resolve: (data) => moment().format(),
      description: 'Atributo implementado para exemplificação da utilização da função resolve',
    }
  }
})
