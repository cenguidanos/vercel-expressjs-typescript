"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const welcome_controller_1 = __importDefault(require("./controllers/welcome.controller"));
const app = express_1.default();
app.use(helmet_1.default());
app.use('/', welcome_controller_1.default);
app.use('/users', user_controller_1.default);
exports.default = app;
