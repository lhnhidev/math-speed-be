import mongoose from 'mongoose';
import Subject from './Subject';

const schema = new mongoose.Schema({
    chuDe: {
        chuDe: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Subject
        },
        level: Number,
    },
    cauHoi: String,
    luaChon: [{
        _id: false,
        index: Number,
        noiDung: String,
        dapAn: Boolean
    }],
    giaiThich: String,
});

export default mongoose.model('Question', schema);