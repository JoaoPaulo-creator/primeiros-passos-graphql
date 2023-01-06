import { PostModel } from '../../../models/Post'


export default {
   Query: {
    posts: () => PostModel.find(),
    post: (_, { id }) => PostModel.findById(id)
   },
   Mutation: {
    createPost: (_, { postData }) => PostModel.create(postData),
    updatePost: (_, { id, postData }) => PostModel.findOneAndUpdate(id, postData, { new: true }),
    deletePost: async (_, postId) => !!(await PostModel.findOneAndDelete(postId)) // dupla exclamacao força o retorno de um boolean
   }
}