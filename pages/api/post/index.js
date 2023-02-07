import db from '../../../utils/db';
import postModel from '../../../models/post';

export default async function handler(req, res) {
	await db.connect();

	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'request error' });
	}

	await db.connect();
	try {
		const posts = await postModel.find({}).populate('user', 'username');

		await db.disconnect();
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json({ message: error });
	}
}
