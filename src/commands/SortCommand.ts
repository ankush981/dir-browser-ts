import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';
import { ISortService } from '../services/ISortService';
import { FileInfo, SortOptions } from '../types';
import { config } from '../utils/config';

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
        if (!config.validSortOptions.includes(sortOption as SortOptions)) {
            console.error('Error: Invalid sort option.');
            return;
        }

        const path = args.length > 1 ? args[1] : config.defaultPath;

        try {
            const files = await this.fileService.listDirectoryContents(path);
            const sortedFiles = this.sortService.sortFiles(files, sortOption);
            this.display(sortedFiles);
        } catch (error: any) {
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
