import express from 'express'

import {signin, signup, sendotp} from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/sendotp', sendotp);
export default router;