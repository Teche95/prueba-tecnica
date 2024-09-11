"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api Personajes',
            version: '1.0.0',
            description: 'Api de Personajes de rick and morty',
            contact: {
                name: 'Pedro Plasencia'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./routes/*.ts']
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
