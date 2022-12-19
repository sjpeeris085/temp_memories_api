import express from "express";

import {
  getPost,
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/*
// router.get(param_1, param_2);
// param_1 : route name
// param_2 : call back function that executed once user visit this route
// all callback functions has req and res params


router.get("/", (req, res) => {
  res.send("THIS WORKS!");
});

we move this callback function to controller
that way we can separate routes and its handelters
*/

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
