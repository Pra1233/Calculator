"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DependencyRegisteration = /** @class */ (function () {
    function DependencyRegisteration(key, factory) {
        this.key = key;
        this.factory = factory;
    }
    return DependencyRegisteration;
}());
exports.default = DependencyRegisteration;
