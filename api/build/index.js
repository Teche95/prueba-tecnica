"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
(0, db_1.conectDb)();
app_1.default.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
