// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../utils/db';

export default async function handler(req, res) {
	await db.connect();

	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'request error' });
	}
	// await db.disconnect();
	res.status(200).json({ message: 'the server is running live' });
}
