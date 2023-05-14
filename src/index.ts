import { FileService } from './services/FileService';
import { SortService } from './services/SortService';
import { SearchService } from './services/SearchService';
import { IFileService } from './services/IFileService';
import { ISortService } from './services/ISortService';
import { ISearchService } from './services/ISearchService';
import { IUserInputHandler } from './app/AppInterfaces';
import { DirectoryBrowserApp } from './app/App';
import { UserInputHandler } from './app/UserInputHandler';

const fileService: IFileService = new FileService();
const sortService: ISortService = new SortService();
const searchService: ISearchService = new SearchService(fileService);

const userInputHandler: IUserInputHandler = new UserInputHandler(fileService, sortService, searchService);

const app = new DirectoryBrowserApp(userInputHandler);
app.run();