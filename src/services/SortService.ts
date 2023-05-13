import { ISortService } from './ISortService';
import { FileInfo, SortOptions } from '../types';

export class SortService implements ISortService {
    sortFiles(files: FileInfo[], sortBy: SortOptions): FileInfo[] {
        const sortedFiles = [...files]; // Create a shallow copy to avoid modifying the original array

        const compare = (a: FileInfo, b: FileInfo) => {
            switch (sortBy) {
                case SortOptions.NAME_ASC:
                    return a.name.localeCompare(b.name);
                case SortOptions.NAME_DESC:
                    return b.name.localeCompare(a.name);
                case SortOptions.SIZE_ASC:
                    return a.size - b.size;
                case SortOptions.SIZE_DESC:
                    return b.size - a.size;
                case SortOptions.DATE_MODIFIED_ASC:
                    return a.updatedAt.getTime() - b.updatedAt.getTime();
                case SortOptions.DATE_MODIFIED_DESC:
                    return b.updatedAt.getTime() - a.updatedAt.getTime();
                default:
                    throw new Error(`Invalid sort option: ${sortBy}`);
            }
        };

        return sortedFiles.sort(compare);
    }
}
