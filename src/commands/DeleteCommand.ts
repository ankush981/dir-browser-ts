import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';

export class DeleteCommand implements ICommand {
    private fileService: IFileService;

    constructor(fileService: IFileService) {
        this.fileService = fileService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.error('Error: Missing file or folder name.');
            return;
        }

        const pathToDelete = args[0];
        try {
            await this.fileService.deletePath(pathToDelete);
            console.log(`'${pathToDelete}' deleted successfully.`);
        } catch (error) {
            console.error(`Error: Failed to delete '${pathToDelete}'.`, error);
        }
    }
}
