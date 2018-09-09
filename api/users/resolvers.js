const fetch = require('node-fetch')
const baseURL = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = (id) => {
  return id
    ? fetch(`${baseURL}/${id}`)
    : fetch(`${baseURL}`)
}

module.exports.getUsers = () => {
  return fetchUsers()
    .then(res => res.json())
    .then(users => users)
}

module.exports.getUsersById = id => {
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
