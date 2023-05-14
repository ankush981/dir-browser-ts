import { BrowseCommand } from "../commands/BrowseCommand";
import { CreateFolderCommand } from "../commands/CreateFolderCommand";
import { DeleteCommand } from "../commands/DeleteCommand";
import { ICommand } from "../commands/ICommand";
import { InfoCommand } from "../commands/InfoCommand";
import { RenameCommand } from "../commands/RenameCommand";
import { SearchCommand } from "../commands/SearchCommand";
import { SortCommand } from "../commands/SortCommand";
import { IFileService } from "../services/IFileService";
import { ISearchService } from "../services/ISearchService";
import { ISortService } from "../services/ISortService";
import { IUserInputHandler } from "./AppInterfaces";

export class UserInputHandler implements IUserInputHandler {
    private fileService: IFileService;
    private sortService: ISortService;
    private searchService: ISearchService;

    constructor(fileService: IFileService, sortService: ISortService, searchService: ISearchService) {
        this.fileService = fileService;
        this.sortService = sortService;
        this.searchService = searchService;
    }

    async processInput(input: string): Promise<ICommand | null> {
        const [commandName, ...args] = input.split(' ');

        switch (commandName) {
            case 'browse':
                return new BrowseCommand(this.fileService, this.searchService, this.sortService);
            case 'create-folder':
                return new CreateFolderCommand(this.fileService);
            case 'delete':
                return new DeleteCommand(this.fileService);
            case 'info':
                return new InfoCommand(this.fileService);
            case 'rename':
                return new RenameCommand(this.fileService);
            case 'search':
                return new SearchCommand(this.searchService);
            case 'sort':
                return new SortCommand(this.fileService, this.sortService);
            default:
                return null;
        }
    }
}
