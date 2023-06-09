import mongoose from 'mongoose'

const GroupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    groupIcon: {
      type: [String],
      //required: true,
    },
    adminId: {
      type: String,
      //required: true,
    },
    followersUserId:
      [{ type: String }] ,
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Group = mongoose.model('Group', GroupSchema)

module.exports = Group
