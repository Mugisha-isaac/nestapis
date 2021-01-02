import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({

    id:Number,
    title:String,
    description:String,
    author:String

})