"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// const PORT: number = 3001;
// app.listen(PORT, () => {
//   console.log(`Italin ta vendo o server na porta ${PORT}`);
// })
app.listen(3003, function () {
    console.log("Italin ta vendo o server na porta 3003");
});
