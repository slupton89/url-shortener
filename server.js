const { ApolloServer, gql } = require('apollo-server')

const urls = [
  {
    id: '123',
    redirectURL: 'https://github.com'
  },
  {
    id: '456',
    redirectURL: 'https://dev.to'
  }
]

const typeDefs = gql`
  type URL {
    id: ID
    redirectURL: String
  }

  type Query {
    urls: [URL]
  }
`

const resolvers = {
  Query: {
    urls: () => urls
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})