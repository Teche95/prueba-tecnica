"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const conectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const DB_URI = process.env.DB_URI;
        if (!DB_URI) {
            throw new Error("DB_URI no esta defininida en el archivo .env");
        }
        yield mongoose_1.default.connect(DB_URI);
        console.log("Base de datos conectada");
    }
    catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        process.exit(1);
    }
});
exports.conectDb = conectDb;
