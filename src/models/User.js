import { model, Schema} from 'mongoose'


export const UserModel = model('User', new Schema({

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: String,

  active: {
    type: Boolean,
    required: true
  }

}))