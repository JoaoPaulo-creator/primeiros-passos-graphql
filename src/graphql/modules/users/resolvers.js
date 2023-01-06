import { UserModel } from '../../../models/User'


export default {

  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`
  },

   Query: {
    users:  async () =>  await UserModel.find(),
    user:  async (_, { userId }) => await UserModel.findById(userId)
   },
   Mutation: {
    createUser: (_, { userData }) => UserModel.create(userData),
    updateUser: async (_, { id, userData }) => await UserModel.findOneAndUpdate(id, userData, { new: true }),
    deleteUser: async (_, { userId }) => !!(await UserModel.findOneAndDelete(userId)) // dupla exclamacao força o retorno de um boolean
   }
}