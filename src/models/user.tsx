import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: false,
      trim: true,
      maxlength: [256, 'Title must be at 256 char max '],
    },
    lastname: {
      type: String,
      required: [false, 'lastname is required'],
      unique: false,
      trim: true,
      maxlength: [256, 'Title must be at 256 char max '],
    },
    age: {
      type: Number,
      required: [false, 'age is required'],
      unique: false,
      trim: true,
      maxlength: [256, 'Title must be at 256 char max '],
    },
    Role: {
      type: Number,
      required: [true, 'Date is required'],
      unique: false,
      trim: true,
      maxlength: [256, 'Title must be at 256 char max '],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default models.User || model('User', userSchema)
