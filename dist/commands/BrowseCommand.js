"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowseCommand = void 0;
const types_1 = require("../types");
const config_1 = require("../utils/config");
class BrowseCommand {
    constructor(fileService, searchService, sortService) {
        this.fileService = fileService;
        this.searchService = searchService;
        this.sortService = sortService;
    }
    async execute(args) {
        const startPath = args[0] || config_1.config.defaultPath;
        const sortBy = args[1] || types_1.SortOptions.NAME_ASC;
        if (!config_1.config.validSortOptions.includes(sortBy)) {
            console.error(`Error: Invalid sort option '${sortBy}'.`);
            return;
        }
        const files = await this.fileService.listDirectoryContents(startPath);
        const sortedFiles = this.sortService.sortFiles(files, sortBy);
        this.display(sortedFiles);
    }
    display(files) {
        console.log('Name\tSize\tDate Modified');
        console.log('---------------------------------');
        for (const file of files) {
            console.log(`${file.name}\t${file.size}\t${file.updatedAt.toLocaleString()}`);
        }
    }
}
exports.BrowseCommand = BrowseCommand;
//# sourceMappingURL=BrowseCommand.js.map