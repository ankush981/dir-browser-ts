"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputHandler = void 0;
const BrowseCommand_1 = require("../commands/BrowseCommand");
const CreateFolderCommand_1 = require("../commands/CreateFolderCommand");
const DeleteCommand_1 = require("../commands/DeleteCommand");
const InfoCommand_1 = require("../commands/InfoCommand");
const RenameCommand_1 = require("../commands/RenameCommand");
const SearchCommand_1 = require("../commands/SearchCommand");
const SortCommand_1 = require("../commands/SortCommand");
class UserInputHandler {
    constructor(fileService, sortService, searchService) {
        this.fileService = fileService;
        this.sortService = sortService;
        this.searchService = searchService;
    }
    async processInput(input) {
        const [commandName, ...args] = input.split(' ');
        switch (commandName) {
            case 'browse':
                return new BrowseCommand_1.BrowseCommand(this.fileService, this.searchService, this.sortService);
            case 'create-folder':
                return new CreateFolderCommand_1.CreateFolderCommand(this.fileService);
            case 'delete':
                return new DeleteCommand_1.DeleteCommand(this.fileService);
            case 'info':
                return new InfoCommand_1.InfoCommand(this.fileService);
            case 'rename':
                return new RenameCommand_1.RenameCommand(this.fileService);
            case 'search':
                return new SearchCommand_1.SearchCommand(this.searchService);
            case 'sort':
                return new SortCommand_1.SortCommand(this.fileService, this.sortService);
            default:
                return null;
        }
    }
}
exports.UserInputHandler = UserInputHandler;
//# sourceMappingURL=UserInputHandler.js.map