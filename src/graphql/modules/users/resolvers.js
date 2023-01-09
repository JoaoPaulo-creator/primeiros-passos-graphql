import { UserModel } from '../../../models/User'
import { USER_ADDED } from './channels'

export default {

  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`
  },

   Query: {
    users:  async () =>  await UserModel.find(),
    user:  async (_, { userId }) => await UserModel.findById(userId)
   },
   Mutation: {
    createUser: async (_, { userData }, { pubsub }) => {
    const user = await UserModel.create(userData)

    pubsub.publish(USER_ADDED, {
      userAdded: user
    })

    return user
    },
    updateUser: async (_, { id, userData }) => await UserModel.findOneAndUpdate(id, userData, { new: true }),
    deleteUser: async (_, { userId }) => !!(await UserModel.findOneAndDelete(userId)) // dupla exclamacao força o retorno de um boolean
   },

   Subscription: {
    // o argumento context serve para compartilhar informacoes entre todo os resolvers da aplicacao
    userAdded: {
      subscribe: (obj, args, { pubsub }) => pubsub.asyncIterator(USER_ADDED)
    }
   }
}