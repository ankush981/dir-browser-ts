import { ISearchService } from './ISearchService';
import { FileInfo } from '../types';
import { IFileService } from './IFileService';

export class SearchService implements ISearchService {
    private fileService: IFileService;

    constructor(fileService: IFileService) {
        this.fileService = fileService;
    }

    async searchByName(
        startPath: string,
        nameQuery: string,
        isExactMatch: boolean
    ): Promise<FileInfo[]> {
        const results: FileInfo[] = [];
        const processDirectory = async (dirPath: string) => {
            const entries = await this.fileService.listDirectoryContents(dirPath);
            for (const entry of entries) {
                if (
                    (isExactMatch && entry.name === nameQuery) ||
                    (!isExactMatch && entry.name.includes(nameQuery))
                ) {
                    results.push(entry);
                }

                if (entry.isDirectory) {
                    await processDirectory(entry.fullPath);
                }
            }
        };

        await processDirectory(startPath);
        return results;
    }
}
