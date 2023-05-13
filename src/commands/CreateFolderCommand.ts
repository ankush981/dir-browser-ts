import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';

export class CreateFolderCommand implements ICommand {
    private fileService: IFileService;

    constructor(fileService: IFileService) {
        this.fileService = fileService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.error('Error: Missing folder name.');
            return;
        }

        const folderName = args[0];
        try {
            await this.fileService.createFolder(folderName);
            console.log(`Folder '${folderName}' created successfully.`);
        } catch (error) {
            console.error(`Error: Failed to create folder '${folderName}'.`, error);
        }
    }
}
