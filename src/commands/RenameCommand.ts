import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';

export class RenameCommand implements ICommand {
    private fileService: IFileService;

    constructor(fileService: IFileService) {
        this.fileService = fileService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length < 2) {
            console.error('Error: Missing file or folder name and/or new name.');
            return;
        }

        const oldPath = args[0];
        const newPath = args[1];
        try {
            await this.fileService.renamePath(oldPath, newPath);
            console.log(`'${oldPath}' renamed to '${newPath}' successfully.`);
        } catch (error: any) {
            console.error(
                `Error: Failed to rename '${oldPath}' to '${newPath}'.`,
                error
            );
        }
    }
}