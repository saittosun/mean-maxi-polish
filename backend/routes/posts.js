// jshint esversion: 9
const express = require("express");

const PostsController = require('../controllers/posts');
const checkAuth = require("../middleware/check-auth");
const extractFile = require('../middleware/file');

const router = express.Router();

router.post(
  "",
  checkAuth,
  extractFile,
  PostsController.postsPost
);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  PostsController.postsPut
);

router.get("", PostsController.postsGet);

router.get("/:id", PostsController.postsGetId);

router.delete("/:id", checkAuth, PostsController.postsDelete);

module.exports = router;
