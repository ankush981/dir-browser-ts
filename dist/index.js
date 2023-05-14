"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileService_1 = require("./services/FileService");
const SortService_1 = require("./services/SortService");
const SearchService_1 = require("./services/SearchService");
const App_1 = require("./app/App");
const UserInputHandler_1 = require("./app/UserInputHandler");
const fileService = new FileService_1.FileService();
const sortService = new SortService_1.SortService();
const searchService = new SearchService_1.SearchService(fileService);
const userInputHandler = new UserInputHandler_1.UserInputHandler(fileService, sortService, searchService);
const app = new App_1.DirectoryBrowserApp(userInputHandler);
app.run();
//# sourceMappingURL=index.js.map