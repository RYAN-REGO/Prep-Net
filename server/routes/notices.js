import express from 'express';

import { getNotice, addNotice } from '../controllers/notifications.js';

const router = express.Router();

router.get('/notifications', getNotice);
router.post('/notifications', addNotice);

export default router;