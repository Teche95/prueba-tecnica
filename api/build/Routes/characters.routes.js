"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characters_controllers_1 = require("../controllers/characters.controllers");
const router = (0, express_1.Router)();
router.get("/", characters_controllers_1.addCharactersInDB);
router.get("/character/showAllChar", characters_controllers_1.showAllChar);
router.get("/character", characters_controllers_1.getCharacterDB);
router.get("/character/detail/:id", characters_controllers_1.getCharacterById);
router.post("/character", characters_controllers_1.createCharacter);
router.put("/character/:id", characters_controllers_1.putCharacter);
router.delete("/character/:id", characters_controllers_1.deleteCharacter);
// router.get("/character/detail/:id", getDetailsCharacter)
exports.default = router;
