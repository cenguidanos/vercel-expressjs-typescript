"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = void 0;
const https_1 = __importDefault(require("https"));
async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return new Promise((resolve, reject) => {
        https_1.default.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve(JSON.parse(data)));
            res.on('error', (err) => reject(err));
        });
    });
}
exports.fetchUsers = fetchUsers;
