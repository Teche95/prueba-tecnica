import mongoose from "mongoose";

export const conectDb = async () => {

    try {
        const DB_URI = process.env.DB_URI
    
        if (!DB_URI) {
          throw new Error("DB_URI no esta defininida en el archivo .env");
        }
    
        await mongoose.connect(DB_URI);
        console.log("Base de datos conectada");
      } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        process.exit(1); 
      }
}