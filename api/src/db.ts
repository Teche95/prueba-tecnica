import mongoose from "mongoose";

export const conectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/prueba-tecnica");
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        process.exit(1);  
    }
}