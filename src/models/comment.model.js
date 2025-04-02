import {Schema,model} from 'mongoose'

const commentSchema = new Schema ({
    commentText:{
        type: String,
        required:true,
        trim:true
    },
    commentedBy:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    post:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:'comment'
    }
})

const comment = model('Comment',commentSchema)