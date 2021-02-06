"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const welcome_service_1 = require("../services/welcome.service");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const welcome = welcome_service_1.hi();
    return res.status(200).json(welcome);
});
exports.default = router;
