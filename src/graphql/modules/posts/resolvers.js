import { PostModel } from '../../../models/Post'
import { UserModel } from '../../../models/User'

export default {

  Post: {
    author: async (post) => await UserModel.findById(post.author)
  },

   Query: {
    posts: () => PostModel.find(),
    post: (_, { id }) => PostModel.findById(id)
   },
   Mutation: {
    createPost: (_, { postData }) => PostModel.create(postData),
    updatePost: (_, { id, postData }) => PostModel.findOneAndUpdate(id, postData, { new: true }),
    deletePost: async (_, { postId }) => !!(await PostModel.findOneAndDelete(postId)) // dupla exclamacao força o retorno de um boolean
   }
}