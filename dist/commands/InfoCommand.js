"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoCommand = void 0;
class InfoCommand {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async execute(args) {
        if (args.length === 0) {
            console.error('Error: Missing file or folder name.');
            return;
        }
        const path = args[0];
        try {
            const fileInfo = await this.fileService.getFileInfo(path);
            this.display(fileInfo);
        }
        catch (error) {
            console.error(`Error: Failed to retrieve info for '${path}'.`, error);
        }
    }
    display(fileInfo) {
        console.log('File Info:');
        console.log(`Name: ${fileInfo.name}`);
        console.log(`Path: ${fileInfo.fullPath}`);
        console.log(`Size: ${fileInfo.size} bytes`);
        console.log(`Date Modified: ${fileInfo.updatedAt.toLocaleString()}`);
        console.log(`Type: ${fileInfo.isDirectory ? 'Folder' : 'File'}`);
    }
}
exports.InfoCommand = InfoCommand;
//# sourceMappingURL=InfoCommand.js.map