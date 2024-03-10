import container from "./DependencyContainer.js";
import LibraryService from "../../application/service/libraryService.js";
import LibraryModel from "../../model/libraryModel.js";

container.register("libraryService", () => new LibraryService());
container.register("libraryModel", () => new LibraryModel());

export default container;
