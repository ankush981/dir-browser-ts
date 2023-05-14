"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const fsp = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
class FileService {
    async listDirectoryContents(dirPath) {
        try {
            const fileNames = await fsp.readdir(dirPath);
            const fileInfos = await Promise.all(fileNames.map(async (fileName) => {
                const filePath = path.join(dirPath, fileName);
                const stats = await fsp.stat(filePath);
                return this.buildFileInfoFromStats(filePath, fileName, stats);
            }));
            return fileInfos;
        }
        catch (error) {
            console.error(`Error reading directory: ${error.message}`);
            return [];
        }
    }
    async getFileInfo(filePath) {
        try {
            const stats = await fsp.stat(filePath);
            const fileName = path.basename(filePath);
            return this.buildFileInfoFromStats(filePath, fileName, stats);
        }
        catch (error) {
            console.error(`Error getting file info: ${error.message}`);
            throw error;
        }
    }
    async createFolder(folderPath) {
        try {
            await fsp.mkdir(folderPath);
        }
        catch (error) {
            console.error(`Error creating folder: ${error.message}`);
            throw error;
        }
    }
    async deletePath(targetPath) {
        try {
            const stats = await fsp.stat(targetPath);
            if (stats.isDirectory()) {
                await fsp.rmdir(targetPath, { recursive: true });
            }
            else {
                await fsp.unlink(targetPath);
            }
        }
        catch (error) {
            console.error(`Error deleting path: ${error.message}`);
            throw error;
        }
    }
    async renamePath(oldPath, newPath) {
        try {
            await fsp.rename(oldPath, newPath);
        }
        catch (error) {
            console.error(`Error renaming path: ${error.message}`);
            throw error;
        }
    }
    buildFileInfoFromStats(filePath, fileName, stats) {
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
exports.FileService = FileService;
//# sourceMappingURL=FileService.js.map