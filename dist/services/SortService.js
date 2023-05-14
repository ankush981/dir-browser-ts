"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortService = void 0;
const types_1 = require("../types");
class SortService {
    sortFiles(files, sortBy) {
        const sortedFiles = [...files]; // Create a shallow copy to avoid modifying the original array
        const compare = (a, b) => {
            switch (sortBy) {
                case types_1.SortOptions.NAME_ASC:
                    return a.name.localeCompare(b.name);
                case types_1.SortOptions.NAME_DESC:
                    return b.name.localeCompare(a.name);
                case types_1.SortOptions.SIZE_ASC:
                    return a.size - b.size;
                case types_1.SortOptions.SIZE_DESC:
                    return b.size - a.size;
                case types_1.SortOptions.DATE_MODIFIED_ASC:
                    return a.updatedAt.getTime() - b.updatedAt.getTime();
                case types_1.SortOptions.DATE_MODIFIED_DESC:
                    return b.updatedAt.getTime() - a.updatedAt.getTime();
                default:
                    throw new Error(`Invalid sort option: ${sortBy}`);
            }
        };
        return sortedFiles.sort(compare);
    }
}
exports.SortService = SortService;
//# sourceMappingURL=SortService.js.map