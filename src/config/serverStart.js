import { ApolloServer } from "apollo-server";
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


const accessLink = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-gql.xc0mkug.mongodb.net/?retryWrites=true&w=majority`

export async function startServer({ typeDefs, resolvers }) {
  mongoose.set('strictQuery', false)

  await mongoose.connect(accessLink)
    .then(() => {
      console.log('✅ Connected to database')
    })

  const server = new ApolloServer({ typeDefs, resolvers })

  server.listen()
  .then(({ url }) => {
    console.log(`🚀 Server running at: ${url}`)
  })
}