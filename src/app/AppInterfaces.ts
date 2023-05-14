import { ICommand } from "../commands/ICommand";

export interface IDirectoryBrowserApp {
    run(): Promise<void>;
}

export interface IUserInputHandler {
    processInput(input: string): Promise<ICommand | null>;
}