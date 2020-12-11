const { ApolloServer, gql } = require('apollo-server')
const post = require('./posts')

const typeDefs = gql
` 
  type Post {
    id: ID!
    topic: String!
    user: String!
    body: String!
    comment: String!
  }

  type User {
    id: ID!
    name: String
    email: String
  }

  type Comment {
    id: ID!
    user: String!
    body: String!
    responses: String
    post: String 
  }

  type Query {
    post: [Post]
    getPostbyID(id: ID!): Post
    getPostByTopic(topic: String!): Post
  }

  type Mutation {
      createPost(id: String!, topic: String!, body: String!, user: String!, comment:String!) : Post!
     }

  `

const resolvers = {
    Query: {
        getPostbyID: (_, { id }) => {
            const postsList = post.find(b => b.id == id)
            return postsList
          },
        getPostByTopic: (_, { topic }) => {
            const postsTopicList = post.find(b => b.topic == topic)
            return postsTopicList
          }
        
    },

    Mutation: {
        createPost: (_, { id, topic, user, body, comment }) => {
            const createpost = { id, topic, user, body, comment }
            post.push(createpost)
            return createpost
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});