"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("../middleware"));
const user_service_1 = require("../services/user.service");
const router = express_1.default.Router();
router.get('/', middleware_1.default.Cors(['GET']), async (_req, res) => {
    let users;
    try {
        users = await user_service_1.fetchUsers();
    }
    catch (error) {
        return res.status(400).send(`Error on route: ${error.message}`);
    }
    return res.status(200).json({ users });
});
exports.default = router;
