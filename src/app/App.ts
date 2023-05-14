import { IDirectoryBrowserApp } from './AppInterfaces';
import { IUserInputHandler } from './AppInterfaces';
import readline from 'readline';

export class DirectoryBrowserApp implements IDirectoryBrowserApp {
    private userInputHandler: IUserInputHandler;

    constructor(userInputHandler: IUserInputHandler) {
        this.userInputHandler = userInputHandler;
    }

    public async run(): Promise<void> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        while (true) {
            const input = await new Promise<string>((resolve) =>
                rl.question('Enter a command: ', resolve)
            );

            if (input === 'exit') {
                break;
            }

            const command = await this.userInputHandler.processInput(input);

            if (command) {
                const args = input.split(' ').slice(1);
                await command.execute(args);
            } else {
                console.error(`Error: Unknown command '${input}'.`);
            }
        }

        rl.close();
        console.log('Exiting application...');
    }
}
