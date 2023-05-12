import { FileInfo } from '../types';

export interface ISearchService {
    searchByName(
        startPath: string,
        nameQuery: string,
        isExactMatch: boolean
    ): Promise<FileInfo[]>;

    searchByContent(
        startPath: string,
        contentQuery: string,
        fileExtensions?: string[]
    ): Promise<FileInfo[]>;
}
