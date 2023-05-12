import { FileInfo } from "../types";

export interface IFileService {
    listDirectoryContents(path: string): Promise<FileInfo[]>;
    getFileInfo(path: string): Promise<FileInfo>;
    createFolder(path: string): Promise<void>;
    deletePath(path: string): Promise<void>;
    renamePath(path: string, newPath: string): Promise<void>;
}