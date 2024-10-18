import mongoose from "mongoose";
import "dotenv/config"; // Carrega as variáveis do .env

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Atlas connected!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err.message);
    process.exit(1); // Encerra a aplicação em caso de erro
  }
}

export async function disconnectDb() {
  try {
    await mongoose.disconnect();
    console.log("Desconectado do MongoDB!");
  } catch (err) {
    console.error("Erro ao desconectar do MongoDB:", err.message);
  }
}
