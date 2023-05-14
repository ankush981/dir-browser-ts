## Introduction

This is a simple Finder/Explorer-style CLI app that allows you to browse and manage files and folders on your computer. It's written in TypeScript and runs on Node.js. The goals are educational, namely:

- Learn better TypeScript by implementing an interesting yet non-trivial project
- Learn how to write a CLI app in TypeScript
- Learn proper folder structure and code organization
- Learn OO design and SOLID principles
- Learn unit testing

I knew all these things were important part of engineering, and could never find anyone to teach me. So, with the help of ChatGPT, I decided to teach myself and level up!

## Capabilities

Browse directories:

- List files and folders in the current directory
- Navigate into a subdirectory
- Navigate back to the parent directory

File information:

- Display detailed information about a file, such as name, size, creation date, and modification date

File operations:

- Rename a file or folder
- Delete a file or folder
- Create a new folder

Searching:

- Search for a file or folder by name (exact match or substring matching)

Sorting:

- Sort files and folders by name, size, or modification date

Configuration:

- Customize the app's behavior through a configuration file (e.g., set the default sorting option)

Help:

- Provide a help menu displaying available commands and their usage

Cross-platform support:

- Ensure compatibility with different operating systems (e.g., Windows, macOS, and Linux)

## Usage

After `node run dist/index.js`, you can use commands as follows:

```
browse
browse ./my-directory
browse ./my-directory size-desc
create-folder new-folder
delete ./path/to/file-or-folder
info ./path/to/file-or-folder
rename ./old-path/to/file-or-folder ./new-path/to/file-or-folder
search document
search document --exact
sort ./my-directory date-modified-asc
sort ./my-directory name-asc
```
