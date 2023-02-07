import db from '../../../utils/db';
import postModel from '../../../models/post';

import { getSession } from 'next-auth/react';

// export const config = {
// 	api: {
// 		bodyParser: false
// 	}
// };

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getAllPost(req, res);
      break;
    case 'POST':
      await createPost(req, res);
      break;
  }
};

export const createPost = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('you are not authenticated');
  }

  const userId = session.user._id;

  // console.log('coming from post route', session);
  // console.log(post);

  const post = req.body;
  // console.log(post);

  await db.connect();

  const newPost = new postModel({
    ...post,
    // content: post.content.replace(/\n/g, '<br />'),
    user: userId,
  });

  try {
    await newPost.save();

    await db.disconnect();
    res.status(201).json(newPost);
    // res.status(201).json(JSON.stringify(newPost));
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const getAllPost = async (req, res) => {
  await db.connect();
  try {
    const posts = await postModel.find();

    await db.disconnect();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
