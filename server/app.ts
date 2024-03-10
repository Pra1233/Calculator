import cors from "cors";
import express from "express";
const app = express();
import LibraryRoute from "./infrastructure/routes/libraryRoutes";

app.use(cors());
app.use(express.json());

app.use(LibraryRoute);

app.listen(3000, () => console.log("Done"));
