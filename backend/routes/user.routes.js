import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getLoggedInUser, getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/getLoggedInUser", protectRoute, getLoggedInUser);

export default router;