import { FileInfo, SortOptions } from '../types';

export interface ISortService {
    sortFiles(files: FileInfo[], sortBy: SortOptions): FileInfo[];
}
