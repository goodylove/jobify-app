import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(file);
//     // set the directory where uploaded files will be stored
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname;
//     // set the name of the uploaded file
//     cb(null, fileName);
//   },
// });

// # REASON FOR CHANGING FROM DISKSTORAGE TO  MEMORYSTORAGE

// we are using this because we cn't directly push image which will
//  be converted to  a buffer to cloudinary and we still want to  store our
// image in the cloudinary so we need extra package (datauri) that can handle this buffer
//  so the cloudinary can work with it
const storage = multer.memoryStorage();
const upload = multer({ storage });
const parser = new DataParser();

export const formateImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
