"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolderCommand = void 0;
class CreateFolderCommand {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async execute(args) {
        if (args.length === 0) {
            console.error('Error: Missing folder name.');
            return;
        }
        const folderName = args[0];
        try {
            await this.fileService.createFolder(folderName);
            console.log(`Folder '${folderName}' created successfully.`);
        }
        catch (error) {
            console.error(`Error: Failed to create folder '${folderName}'.`, error);
        }
    }
}
exports.CreateFolderCommand = CreateFolderCommand;
//# sourceMappingURL=CreateFolderCommand.js.map