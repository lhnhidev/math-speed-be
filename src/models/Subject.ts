import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    index: Number,
    ten: String,
});

export default mongoose.model('Subject', schema);