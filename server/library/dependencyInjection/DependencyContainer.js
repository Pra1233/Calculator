"use strict";
// import DependencyRegistration from "./DependencyRegisteration.js";
// class DependencyContainer {
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor() {
//     this.usedDependency = new Map();
//     this.registerDependency = [];
//   }
//   register(key, factory) {
//     this.registerDependency.push(new DependencyRegistration(key, factory));
//   }
//   resolve(key) {
//     //  using saved instance
//     const exisitingDependencyInstance = this.usedDependency.get(key);
//     if (exisitingDependencyInstance) {
//       return exisitingDependencyInstance;
//     }
//     const availableDependency = this.registerDependency.find(
//       (dep) => dep.key === key
//     );
//     if (!availableDependency) {
//       throw new Error(`Dependency ${key} is missing`);
//     } else {
//       //creating instance and saving in map
//       const dependencyInstance = availableDependency.factory();
//       this.usedDependency.set(key, dependencyInstance);
//       return dependencyInstance;
//     }
//   }
// }
// const instance = new DependencyContainer();
// export default instance;
var DependencyRegisteration_js_1 = require("./DependencyRegisteration.js");
var DependencyContainer = /** @class */ (function () {
    function DependencyContainer() {
        this.usedDependency = new Map();
        this.registerDependency = []; //array of object
    }
    DependencyContainer.prototype.register = function (key, factory) {
        this.registerDependency.push(new DependencyRegisteration_js_1.default(key, factory));
    };
    DependencyContainer.prototype.resolve = function (key) {
        //  using saved instance
        var exisitingDependencyInstance = this.usedDependency.get(key);
        if (exisitingDependencyInstance) {
            return exisitingDependencyInstance;
        }
        var availableDependency = this.registerDependency.find(function (dep) { return dep.key === key; });
        if (!availableDependency) {
            throw new Error("Dependency ".concat(key, " is missing"));
        }
        else {
            //creating instance and saving in map
            var dependencyInstance = availableDependency.factory();
            this.usedDependency.set(key, dependencyInstance);
            return dependencyInstance;
        }
    };
    return DependencyContainer;
}());
var instance = new DependencyContainer();
exports.default = instance;
