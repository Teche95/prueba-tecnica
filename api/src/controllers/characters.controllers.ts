import { Request, Response } from "express"
import Personajes from "../models/personajes.models"


interface CharacterFromAPI {
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    origin: { name: string };
}

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
export const addCharactersInDB = async (req: Request, res: Response) => {

    try {
        const character = await fetch("https://rickandmortyapi.com/api/character/?page=1")
        const data: { results: CharacterFromAPI[] } = await character.json()
        const result = data.results.slice(0, 10)

        const savedCharacters = []

        for (const char of result) {

            const newCharacter = new Personajes({
                name: char.name,
                status: char.status,
                image: char.image,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name
            })
            await newCharacter.save()
            savedCharacters.push(newCharacter)

        }
        return res.status(201).send(savedCharacters);
    } catch (error) {
        console.error("Error adding characters:", error);
        if (error instanceof Error)
            return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }



}

export const showAllChar = async (req: Request, res: Response) => {
    try {
        const character = await fetch("https://rickandmortyapi.com/api/character/?page=1")
        const data: { results: CharacterFromAPI[] } = await character.json()
        const result = data.results.slice(0, 10)


        for (const char of result) {

            const existinCharacter = await Personajes.findOne({ name: char.name })
            if (!existinCharacter) {
                const newCharacter = new Personajes({
                    name: char.name,
                    status: char.status,
                    image: char.image,
                    species: char.species,
                    gender: char.gender,
                    origin: char.origin.name
                })
                await newCharacter.save()
            }
        }
        return res.status(201).json({ message: "Personajes guardados correctamente." });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getCharacterDB = async (req: Request, res: Response) => {
    try {
        const characters = await Personajes.find()
        if (!characters) return res.status(400).json({ msg: 'Personajes no encontrado' })
        return res.json(characters)
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const createCharacter = async (req: Request, res: Response) => {
    const { name, status, species, gender, image, origin } = req.body

    try {

        const character = await Personajes.findOne({ name })
        if (!character) {
            const newCharacter = new Personajes({
                name, status, species, gender, origin, image
            })
            await newCharacter.save()
            return res.json(newCharacter)
        }
        return res.status(400).json({ msg: 'Personaje ya existente' })
    } catch (error) {
        console.log(error)
    }

    // console.log(newCharacter)
    res.send("postCharacter")
}

export const putCharacter = async (req: Request, res: Response) => {

    try {
        const findCharAndUpdate = await Personajes.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!findCharAndUpdate) return res.status(400).json({ msg: 'Personaje no encontrado' })
        // console.log("findCharAndUpdate", findCharAndUpdate)
        return res.json(findCharAndUpdate)
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}


export const deleteCharacter = async (req: Request, res: Response) => {

    try {
        const deleteCharacterById = await Personajes.findByIdAndDelete(req.params.id)
        if (!deleteCharacterById) return res.status(400).json({ msg: 'Personaje no encontrado' })
        return res.json(deleteCharacterById)
        // console.log(deleteCharacterById)
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

// export const getDetailsCharacter = (req: Request, res: Response) => {

//     try {
//         const characterDetails = Personajes.findById(req.params.id)

//     } catch (error) {

//     }
// }

export const getCharacterById = async (req: Request, res: Response) => {
    try {
        const character = await Personajes.findById(req.params.id)
        if (!character) return res.status(400).json({ msg: 'Personaje no encontrado' })
        return res.json(character)
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}