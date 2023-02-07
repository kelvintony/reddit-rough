import db from "../../../../utils/db";
import postModel from "../../../../models/post";

import { getSession } from "next-auth/react";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getPost(req, res);
      break;
    case "PUT":
      await editPost(req, res);
      break;

    case "DELETE":
      await deletePost(req, res);
      break;
  }
};

export const getPost = async (req, res) => {
  try {
    await db.connect();

    const post = await postModel.findById(req.query.id);

    await db.disconnect();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).send("you are not authenticated");
  }
  //   const userId = session.user._id;

  //   if (condition) {
  //   }

  try {
    await db.connect();
    const id = req.query.id;
    const updatedData = req.body;
    const options = { new: true };
    const data = await postModel.findByIdAndUpdate(id, updatedData, options);

    await db.disconnect();
    res.status(200).json({ message: "updated successfully", data });
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: "something went wrong" });
  }
  // const userId = session.user._id;

  // const post = req.body;

  // await db.connect();

  // const newPost = new postModel({
  // 	...post,
  // 	user: userId
  // });

  // try {
  // 	await newPost.save();

  // 	await db.disconnect();
  // 	res.status(201).json(JSON.stringify(newPost));
  // } catch (error) {
  // 	res.status(409).json({ message: error });
  // }
};

export const deletePost = async (req, res) => {
  const id = req.query.id;

  try {
    await postModel.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
