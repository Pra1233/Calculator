"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DependencyContainer_js_1 = require("./DependencyContainer.js");
var libraryService_js_1 = require("../../application/service/libraryService.js");
var libraryModel_js_1 = require("../../model/libraryModel.js");
DependencyContainer_js_1.default.register("libraryService", function () { return new libraryService_js_1.default(); });
DependencyContainer_js_1.default.register("libraryModel", function () { return new libraryModel_js_1.default(); });
exports.default = DependencyContainer_js_1.default;
