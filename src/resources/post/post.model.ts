import mongoose from 'mongoose';
import Post from '@/resources/post/post.interface';

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export const postModel = mongoose.model<Post>('POST', postSchema);
