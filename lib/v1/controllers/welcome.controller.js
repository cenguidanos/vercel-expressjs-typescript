import express from 'express';
import { hi } from '../services/welcome.service';
const router = express.Router();
router.get('/', (_req, res) => {
    const welcome = hi();
    return res.status(200).json(welcome);
});
export default router;
