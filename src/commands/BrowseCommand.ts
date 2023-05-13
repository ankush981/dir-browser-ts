import { ICommand } from './ICommand';
import { IFileService } from '../services/IFileService';
import { ISearchService } from '../services/ISearchService';
import { ISortService } from '../services/ISortService';
import { FileInfo, SortOptions } from '../types';

export class BrowseCommand implements ICommand {
    private fileService: IFileService;
    private searchService: ISearchService;
    private sortService: ISortService;

    constructor(
        fileService: IFileService,
        searchService: ISearchService,
        sortService: ISortService
    ) {
        this.fileService = fileService;
        this.searchService = searchService;
        this.sortService = sortService;
    }

    async execute(args: string[]): Promise<void> {
        const startPath = args[0] || '.';
        const sortBy = args[1] as SortOptions || SortOptions.NAME_ASC;

        const files = await this.fileService.listDirectoryContents(startPath);
        const sortedFiles = this.sortService.sortFiles(files, sortBy);

        this.display(sortedFiles);
    }

    private display(files: FileInfo[]): void {
        console.log('Name\tSize\tDate Modified');
        console.log('---------------------------------');
        for (const file of files) {
            console.log(
                `${file.name}\t${file.size}\t${file.updatedAt.toLocaleString()}`
            );
        }
    }
}
