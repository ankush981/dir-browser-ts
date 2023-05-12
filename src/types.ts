// File information type
export interface FileInfo {
    name: string;
    fullPath: string;
    size: number;
    isDirectory: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// Sort options for files and folders
export enum SortOptions {
    NAME_ASC = 'name-asc',
    NAME_DESC = 'name-desc',
    SIZE_ASC = 'size-asc',
    SIZE_DESC = 'size-desc',
    DATE_MODIFIED_ASC = 'date-modified-asc',
    DATE_MODIFIED_DESC = 'date-modified-desc',
}

// Configuration type
export interface Configuration {
    defaultSort: SortOptions;
}
