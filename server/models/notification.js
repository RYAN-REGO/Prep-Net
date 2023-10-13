import mongoose from 'mongoose';

const notiSchema = mongoose.Schema({
     notice : {
        type : String,
     }
})

export default mongoose.model('notification', notiSchema);

