const graphql = require('graphql')

const {
  userType
} = require('./types')

module.exports.user = {
  type: userType,
  description: 'Retorna um objeto com um único usuário',

  args: {
    id: {
      type: graphql.GraphQLID,
      description: 'Identificador único do usuário requerido'
    }
  },

  resolve: (root, args, context) => {
    return context.getUsersByIdLoader.load(args.id)
  }
}

module.exports.users = {
  type: new graphql.GraphQLList(userType),
  description: 'Retorna uma lista de usuários',

  resolve: (root, args, context) => {
    return context.getUsersLoader()
  }
}
