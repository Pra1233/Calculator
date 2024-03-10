"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DependencyContainer_js_1 = __importDefault(require("./DependencyContainer.js"));
const libraryService_js_1 = __importDefault(require("../../application/service/libraryService.js"));
const libraryModel_js_1 = __importDefault(require("../../model/libraryModel.js"));
DependencyContainer_js_1.default.register("libraryService", () => new libraryService_js_1.default());
DependencyContainer_js_1.default.register("libraryModel", () => new libraryModel_js_1.default());
exports.default = DependencyContainer_js_1.default;
