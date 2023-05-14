import { ICommand } from './ICommand';
import { ISearchService } from '../services/ISearchService';
import { FileInfo } from '../types';
import { config } from '../utils/config';

export class SearchCommand implements ICommand {
    private searchService: ISearchService;

    constructor(searchService: ISearchService) {
        this.searchService = searchService;
    }

    async execute(args: string[]): Promise<void> {
        if (args.length === 0) {
            console.error('Error: Missing search query.');
            return;
        }

        const startPath = config.defaultPath;
        const nameQuery = args[0];
        const isExactMatch = args.length > 1 && args[1] === '--exact';

        try {
            const results = await this.searchService.searchByName(
                startPath,
                nameQuery,
                isExactMatch
            );
            this.display(results);
        } catch (error: any) {
            console.error(`Error: Failed to search for '${nameQuery}'.`, error);
        }
    }

    private display(files: FileInfo[]): void {
        console.log('Search Results:');
        for (const file of files) {
            console.log(`${file.fullPath}`);
        }
    }
}
