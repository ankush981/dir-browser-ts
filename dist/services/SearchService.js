"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
class SearchService {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async searchByName(startPath, nameQuery, isExactMatch) {
        const results = [];
        const processDirectory = async (dirPath) => {
            const entries = await this.fileService.listDirectoryContents(dirPath);
            for (const entry of entries) {
                if ((isExactMatch && entry.name === nameQuery) ||
                    (!isExactMatch && entry.name.includes(nameQuery))) {
                    results.push(entry);
                }
                if (entry.isDirectory) {
                    await processDirectory(entry.fullPath);
                }
            }
        };
        await processDirectory(startPath);
        return results;
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=SearchService.js.map