import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({

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
})

export default mongoose.model('Personajes', characterSchema)