import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from 'node:crypto'




const typeDefs = gql`
    
    type User {
        _id: ID!
        name: String! 
        email: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
        getUserByEmail(email: String): User!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`

const user = [
    {_id: String(randomUUID()), name: 'Joao', email: 'joaoteste@teste.com', active: true},
    {_id: String(randomUUID()), name: 'Lucas', email: 'lucasteste@teste.com', active: true},
    {_id: String(randomUUID()), name: 'Rafael', email: 'rafaelteste@teste.com', active: false},
 ]


const resolvers = {
    Query: {
        hello: () => 'Teste',
        users: () => user,
        getUserByEmail: (_, args) => {
            return user.find((user) => user.email === args.email)
        } 
    },

    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(randomUUID()),
                name: args.name,
                email: args.email
            }

            user.push(newUser)
            return newUser
        }
        
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server running at: ${url}`))