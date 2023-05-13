import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';
import { FileInfo } from '../types';

export class InfoCommand implements ICommand {
    private fileService: IFileService;

    constructor(fileService: IFileService) {
        this.fileService = fileService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.error('Error: Missing file or folder name.');
            return;
        }

        const path = args[0];
        try {
            const fileInfo = await this.fileService.getFileInfo(path);
            this.display(fileInfo);
        } catch (error) {
            console.error(`Error: Failed to retrieve info for '${path}'.`, error);
        }
    }

    private display(fileInfo: FileInfo): void {
        console.log('File Info:');
        console.log(`Name: ${fileInfo.name}`);
        console.log(`Path: ${fileInfo.fullPath}`);
        console.log(`Size: ${fileInfo.size} bytes`);
        console.log(`Date Modified: ${fileInfo.updatedAt.toLocaleString()}`);
        console.log(`Type: ${fileInfo.isDirectory ? 'Folder' : 'File'}`);
    }
}
