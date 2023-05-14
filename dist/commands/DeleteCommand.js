"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommand = void 0;
class DeleteCommand {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async execute(args) {
        if (args.length === 0) {
            console.error('Error: Missing file or folder name.');
            return;
        }
        const pathToDelete = args[0];
        try {
            await this.fileService.deletePath(pathToDelete);
            console.log(`'${pathToDelete}' deleted successfully.`);
        }
        catch (error) {
            console.error(`Error: Failed to delete '${pathToDelete}'.`, error);
        }
    }
}
exports.DeleteCommand = DeleteCommand;
//# sourceMappingURL=DeleteCommand.js.map