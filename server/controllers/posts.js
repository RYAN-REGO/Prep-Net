import interviewExp from "../models/interviewExp.js";

export const getPosts = async (req, res) => {
  try {
    const interviewExps = await interviewExp.find();

    res.status(200).json(interviewExps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsCount = async (req, res) => {
  try {
    const interviewExps = await interviewExp.find();

    const postCount = interviewExps.length;
    res.status(200).json(postCount);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const cname = new RegExp(searchQuery, "i");
    const posts = await interviewExp.find({ cname });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRelatedPosts = async (req, res) => {
  const { searchQuery } = req.query;
  console.log(searchQuery);
  try {
    const cname = new RegExp(searchQuery, "i");
    const posts = await interviewExp.find({ cname });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getPostsByBatch = async (req, res) => {
  const { batch } = req.query;

  try {
    const batchNum = new RegExp(batch, "i");
    const posts = await interviewExp.find({ batchNum });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMyPosts = async (req, res) => {
  const { creatorId } = req.query;

  try {
    const creator = new RegExp(creatorId, "i");
    const posts = await interviewExp.find({ creator });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await interviewExp.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new interviewExp({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch {
    res.status(404).json({ message: error.message });
  }
};
