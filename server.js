const express = require('express')
const DataLoader = require('dataloader')
const graphqlHTTP = require('express-graphql')

const app = express()
const port = 4000
const schema = require('./schema')

const {
  getUsers,
  getUsersById
} = require('./resolvers')

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {
    getUsersLoader: getUsers,
    getUsersByIdLoader: new DataLoader(getUsersById)
  }
}))

app.listen(port, () => console.log(`Server is running at http://localhost:${port}/graphql`))
