"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCommand = void 0;
const config_1 = require("../utils/config");
class SearchCommand {
    constructor(searchService) {
        this.searchService = searchService;
    }
    async execute(args) {
        if (args.length === 0) {
            console.error('Error: Missing search query.');
            return;
        }
        const startPath = config_1.config.defaultPath;
        const nameQuery = args[0];
        const isExactMatch = args.length > 1 && args[1] === '--exact';
        try {
            const results = await this.searchService.searchByName(startPath, nameQuery, isExactMatch);
            this.display(results);
        }
        catch (error) {
            console.error(`Error: Failed to search for '${nameQuery}'.`, error);
        }
    }
    display(files) {
        console.log('Search Results:');
        for (const file of files) {
            console.log(`${file.fullPath}`);
        }
    }
}
exports.SearchCommand = SearchCommand;
//# sourceMappingURL=SearchCommand.js.map