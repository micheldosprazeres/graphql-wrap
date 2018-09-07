const fetch = require('node-fetch')
const express = require('express')
const DataLoader = require('dataloader')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()
const port = 4000
const baseURL = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = (id) => {
  return id
    ? fetch(`${url}/${id}`)
    : fetch(`${url}`)
}

const getUsers = () => {
  return fetchUsers()
    .then(res => res.json())
    .then(users => users)
}

const getUsersById = id => {
  return new Promise((resolve, reject) => {
    fetchUsers(id)
      .then(res => res.json())
      .then(user => {
        return resolve([
          user
        ])
      })
  })
}

app.use('/graphql', graphqlHTTP({
  schema,
  context: {
    getUsersLoader: getUsers,
    getUsersByIdLoader: new DataLoader(getUsersById)
  },
  graphiql: true,
}))

app.listen(port, () => console.info(`Server is running in port ${port}.`))
