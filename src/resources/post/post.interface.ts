import mongoose from 'mongoose';

export default interface Post extends mongoose.Document {
    title: string;
    body: string;
}
