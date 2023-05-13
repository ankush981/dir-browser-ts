import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';
import { ISortService } from '../services/ISortService';
import { FileInfo, SortOptions } from '../types';

export class SortCommand implements ICommand {
    private fileService: IFileService;
    private sortService: ISortService;

    constructor(fileService: IFileService, sortService: ISortService) {
        this.fileService = fileService;
        this.sortService = sortService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.error('Error: Missing sort option.');
            return;
        }

        const sortOption = args[0] as SortOptions;
        const path = args.length > 1 ? args[1] : '.';

        try {
            const files = await this.fileService.listDirectoryContents(path);
            const sortedFiles = this.sortService.sortFiles(files, sortOption);
            this.display(sortedFiles);
        } catch (error) {
            console.error(`Error: Failed to sort files in '${path}'.`, error);
        }
    }

    private display(files: FileInfo[]): void {
        console.log('Sorted Files:');
        for (const file of files) {
            console.log(`${file.name}`);
        }
    }
}
