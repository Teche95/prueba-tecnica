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
exports.getCharacterById = exports.deleteCharacter = exports.putCharacter = exports.createCharacter = exports.getCharacterDB = exports.showAllChar = exports.addCharactersInDB = void 0;
const personajes_models_1 = __importDefault(require("../models/personajes.models"));
/**
 * @swagger
 * components:
 *   schemas:
 *     personajes:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The auto-generated id of the Jedi
 *         status:
 *           type: string
 *           description: The name of the Jedi
 *           species: string
 *           gender: string
 *           origin: string
 *           image: string
 *       example:
 *         name: Luke Skywalker
 *         status: alive
 *         species: Human
 *         gender: male
 *         origin: tierra
 *         image: https://rickandmortyapi.com/api/character/avatar/1.jpeg
 */
/**
 * @swagger
 * tags:
 *   name: Jedis
 *   description: The Jedis managing API
 */
/**
 * @swagger
 * /api:
 *   get:
 *     summary: Returns the list of all the Jedis
 *     tags: [Jedis]
 *     responses:
 *       200:
 *         description: The list of the Jedis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/personajes'
 */
const addCharactersInDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const character = yield fetch("https://rickandmortyapi.com/api/character/?page=1");
        const data = yield character.json();
        const result = data.results.slice(0, 10);
        const savedCharacters = [];
        for (const char of result) {
            const newCharacter = new personajes_models_1.default({
                name: char.name,
                status: char.status,
                image: char.image,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name
            });
            yield newCharacter.save();
            savedCharacters.push(newCharacter);
        }
        return res.status(201).send(savedCharacters);
    }
    catch (error) {
        console.error("Error adding characters:", error);
        if (error instanceof Error)
            return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
exports.addCharactersInDB = addCharactersInDB;
const showAllChar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const character = yield fetch("https://rickandmortyapi.com/api/character/?page=1");
        const data = yield character.json();
        const result = data.results.slice(0, 10);
        for (const char of result) {
            const existinCharacter = yield personajes_models_1.default.findOne({ name: char.name });
            if (!existinCharacter) {
                const newCharacter = new personajes_models_1.default({
                    name: char.name,
                    status: char.status,
                    image: char.image,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin.name
                });
                yield newCharacter.save();
            }
        }
        return res.status(201).json({ message: "Personajes guardados correctamente." });
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.showAllChar = showAllChar;
const getCharacterDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const characters = yield personajes_models_1.default.find();
        if (!characters)
            return res.status(400).json({ msg: 'Personajes no encontrado' });
        return res.json(characters);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.getCharacterDB = getCharacterDB;
const createCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, status, species, gender, image, origin } = req.body;
    try {
        const character = yield personajes_models_1.default.findOne({ name });
        if (!character) {
            const newCharacter = new personajes_models_1.default({
                name, status, species, gender, origin, image
            });
            yield newCharacter.save();
            return res.json(newCharacter);
        }
        return res.status(400).json({ msg: 'Personaje ya existente' });
    }
    catch (error) {
        console.log(error);
    }
    res.send("postCharacter");
});
exports.createCharacter = createCharacter;
const putCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findCharAndUpdate = yield personajes_models_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!findCharAndUpdate)
            return res.status(400).json({ msg: 'Personaje no encontrado' });
        return res.json(findCharAndUpdate);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.putCharacter = putCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteCharacterById = yield personajes_models_1.default.findByIdAndDelete(req.params.id);
        if (!deleteCharacterById)
            return res.status(400).json({ msg: 'Personaje no encontrado' });
        return res.json(deleteCharacterById);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.deleteCharacter = deleteCharacter;
const getCharacterById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const character = yield personajes_models_1.default.findById(req.params.id);
        if (!character)
            return res.status(400).json({ msg: 'Personaje no encontrado' });
        return res.json(character);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.getCharacterById = getCharacterById;
