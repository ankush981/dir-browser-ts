"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameCommand = void 0;
class RenameCommand {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async execute(args) {
        if (args.length < 2) {
            console.error('Error: Missing file or folder name and/or new name.');
            return;
        }
        const oldPath = args[0];
        const newPath = args[1];
        try {
            await this.fileService.renamePath(oldPath, newPath);
            console.log(`'${oldPath}' renamed to '${newPath}' successfully.`);
        }
        catch (error) {
            console.error(`Error: Failed to rename '${oldPath}' to '${newPath}'.`, error);
        }
    }
}
exports.RenameCommand = RenameCommand;
//# sourceMappingURL=RenameCommand.js.map