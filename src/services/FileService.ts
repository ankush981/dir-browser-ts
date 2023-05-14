import { IFileService } from './IFileService';
import { FileInfo } from '../types';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as path from 'path';

export class FileService implements IFileService {
    async listDirectoryContents(dirPath: string): Promise<FileInfo[]> {
        try {
            const fileNames = await fsp.readdir(dirPath);
            const fileInfos = await Promise.all(
                fileNames.map(async (fileName) => {
                    const filePath = path.join(dirPath, fileName);
                    const stats = await fsp.stat(filePath);
                    return this.buildFileInfoFromStats(filePath, fileName, stats);
                })
            );
            return fileInfos;
        } catch (error: any) {
            console.error(`Error reading directory: ${error.message}`);
            return [];
        }
    }

    async getFileInfo(filePath: string): Promise<FileInfo> {
        try {
            const stats = await fsp.stat(filePath);
            const fileName = path.basename(filePath);
            return this.buildFileInfoFromStats(filePath, fileName, stats);
        } catch (error: any) {
            console.error(`Error getting file info: ${error.message}`);
            throw error;
        }
    }

    async createFolder(folderPath: string): Promise<void> {
        try {
            await fsp.mkdir(folderPath);
        } catch (error: any) {
            console.error(`Error creating folder: ${error.message}`);
            throw error;
        }
    }

    async deletePath(targetPath: string): Promise<void> {
        try {
            const stats = await fsp.stat(targetPath);
            if (stats.isDirectory()) {
                await fsp.rmdir(targetPath, { recursive: true });
            } else {
                await fsp.unlink(targetPath);
            }
        } catch (error: any) {
            console.error(`Error deleting path: ${error.message}`);
            throw error;
        }
    }

    async renamePath(oldPath: string, newPath: string): Promise<void> {
        try {
            await fsp.rename(oldPath, newPath);
        } catch (error: any) {
            console.error(`Error renaming path: ${error.message}`);
            throw error;
        }
    }

    private buildFileInfoFromStats(
        filePath: string,
        fileName: string,
        stats: fs.Stats
    ): FileInfo {
        return {
            name: fileName,
            fullPath: filePath,
            size: stats.size,
            isDirectory: stats.isDirectory(),
            createdAt: stats.birthtime,
            updatedAt: stats.mtime,
        };
    }
}
