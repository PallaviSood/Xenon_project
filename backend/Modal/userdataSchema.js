import mongoose from "mongoose";

const userdataSchema = new mongoose.Schema({
    email: {
        username: {
            type: String,
            videos: [{
                type: Buffer,
                title: {
                    type: String,
                    required: [true,'Title Required']
                },
                likes:{type: Number,default: 0},
                hashtags: [{type: String}],
            }],
            followedUser:[{type:String}],
            followingUser: [{type:String}],
            followedHastag:[{type:String}],
            likedVideos: [{type:String}],
            Collections:{
                private:[{
                    collectionName: [{
                        video: [{type:String}]
                    }]
                }],
                public:[{
                    collectionName: [{
                        video: [{type:String}]
                    }]
                }],
            }
        }
    }
})

let userData = mongoose.model("signup",userdataSchema,"signup");

export default userData;