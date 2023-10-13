import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name : String,
    creator : String,
    batchNum : String,
    department : String,
    cname : String,
    introduction : String,
    roundMention : String,
    roundDescription : String,
    tips : String,
    impTopics : {
        type : [String],
        default : []
    },
    LinkedinURL : String,
    createdAt : {
        type : Date,
        default : new Date()
    }
})

const interviewExp = mongoose.model('interviewExp', postSchema);

export default interviewExp;