"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortCommand = void 0;
const config_1 = require("../utils/config");
class SortCommand {
    constructor(fileService, sortService) {
        this.fileService = fileService;
        this.sortService = sortService;
    }
    async execute(args) {
        if (args.length === 0) {
            console.error('Error: Missing sort option.');
            return;
        }
        const sortOption = args[0];
        if (!config_1.config.validSortOptions.includes(sortOption)) {
            console.error('Error: Invalid sort option.');
            return;
        }
        const path = args.length > 1 ? args[1] : config_1.config.defaultPath;
        try {
            const files = await this.fileService.listDirectoryContents(path);
            const sortedFiles = this.sortService.sortFiles(files, sortOption);
            this.display(sortedFiles);
        }
        catch (error) {
            console.error(`Error: Failed to sort files in '${path}'.`, error);
        }
    }
    display(files) {
        console.log('Sorted Files:');
        for (const file of files) {
            console.log(`${file.name}`);
        }
    }
}
exports.SortCommand = SortCommand;
//# sourceMappingURL=SortCommand.js.map