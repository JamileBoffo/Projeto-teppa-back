"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 7000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.status(200).json({ status: 'sucess', version: '1.0.0' });
});
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});
//app.use(cors());
//app.use(express.json());
