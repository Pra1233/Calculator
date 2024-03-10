"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const libraryRoutes_1 = __importDefault(require("./infrastructure/routes/libraryRoutes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(libraryRoutes_1.default);
app.listen(3000, () => console.log("Done"));