import multer from "multer";
import path from "path";

// Define onde salvar os arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/images")); // pasta de destino
  },
  filename: (req, file, cb) => {
    // exemplo: 1696012345678-foto.jpg
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage });