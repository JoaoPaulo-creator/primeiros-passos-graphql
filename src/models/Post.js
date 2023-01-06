import { model, Schema} from 'mongoose'

export const PostModel = model('Post', new Schema({
  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  author: {
    type: Schema.Types.ObjectId, //o ObjctId é uma referencia ao model User, ou seja, seu id virá da collection/tabela de usuários
    ref: 'User',
    required: true
  },

}))


