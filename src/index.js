import { startServer } from "./config/serverStart";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";


startServer({ typeDefs, resolvers })