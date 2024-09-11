import { Router } from "express";
import { deleteCharacter, addCharactersInDB, createCharacter, putCharacter, getCharacterDB, getCharacterById, showAllChar } from "../controllers/characters.controllers";

const router = Router();

router.get("/", addCharactersInDB)

router.get("/character/showAllChar",showAllChar)

router.get("/character", getCharacterDB)

router.get("/character/detail/:id", getCharacterById)

router.post("/character", createCharacter)

router.put("/character/:id", putCharacter)

router.delete("/character/:id", deleteCharacter)

// router.get("/character/detail/:id", getDetailsCharacter)

export default router