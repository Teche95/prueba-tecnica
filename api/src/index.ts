import app from "./app";
import { conectDb } from "./db";

conectDb()
app.listen(3000, () =>
    console.log("Servidor corriendo en el puerto 3000")
)