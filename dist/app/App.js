"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryBrowserApp = void 0;
const readline_1 = __importDefault(require("readline"));
class DirectoryBrowserApp {
    constructor(userInputHandler) {
        this.userInputHandler = userInputHandler;
    }
    async run() {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        while (true) {
            const input = await new Promise((resolve) => rl.question('Enter a command: ', resolve));
            if (input === 'exit') {
                break;
            }
            const command = await this.userInputHandler.processInput(input);
            if (command) {
                const args = input.split(' ').slice(1);
                await command.execute(args);
            }
            else {
                console.error(`Error: Unknown command '${input}'.`);
            }
        }
        rl.close();
        console.log('Exiting application...');
    }
}
exports.DirectoryBrowserApp = DirectoryBrowserApp;
//# sourceMappingURL=App.js.map