import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		community: { type: String, required: true },
		image: { type: String },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			required: true
		}
	},
	{
		timestamps: true
	}
);

const post = mongoose.models.post || mongoose.model('post', postSchema);

export default post;
