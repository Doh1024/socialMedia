import express from "express"
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

/* reading */

router.get("/:id", verifyToken, getUser ); //quary string
router.get("/:id/friends", verifyToken, getUserFriends);

/* update */

router.patch("/:id/:friendId", verifyToken, addRemoveFriend)

export default router;

