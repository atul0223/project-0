import mongoose from 'mongoose';
const userProfileSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Types.ObjectId,
        ref:"User",
       
    },
     profile:{
        type:mongoose.Types.ObjectId,
        ref:"User",
       
    },
    requestStatus:{
      type: String, enum: [ "accepted", "pending"],
      required:true
    }
},{
    timestamps:true
}
  
);
const UserProfile = mongoose.model('UserProfile', userProfileSchema);
export default UserProfile