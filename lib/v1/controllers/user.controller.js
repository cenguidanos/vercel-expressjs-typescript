import express from 'express';
import middleware from '../middleware';
import { fetchUsers } from '../services/user.service';
const router = express.Router();
router.get('/', middleware.Cors(['GET']), async (_req, res) => {
    let users;
    try {
        users = await fetchUsers();
    }
    catch (error) {
        return res.status(400).send(`Error on route: ${error.message}`);
    }
    return res.status(200).json({ users });
});
export default router;
