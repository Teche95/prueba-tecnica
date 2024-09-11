"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const characterSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: String,
        require: true,
    },
    species: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    origin: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
});
exports.default = mongoose_1.default.model('Personajes', characterSchema);
