# Node-TS-Setup

Welcome to Node-TS-Setup! This is a simple boilerplate setup for Node.js projects using TypeScript. It includes a basic file structure, commonly used dependencies, and settings to get you up and running quickly.

## Pre-requisites

Before you get started with Node-TS-Setup, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (comes with Node.js installation)

## Getting started

1. Clone or download the repository to your local machine.
2. Open the terminal and navigate to the project's root folder.
3. Run `npm install` to install all the dependencies required by the project.
4. Run `npm run dev` to start the development server. This command builds and runs the project in development mode, with hot reloading enabled.

The development server can be accessed at `http://localhost:3000`.

## Project structure

The project structure is as follows:

```
Node-TS-Setup/
├── dist/
│   ├── index.js
│   └── ...
├── src/
│   ├── controllers/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── index.ts
│   └── ...
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── ...
```

- The `dist/` folder contains the compiled TypeScript code when `npm run build` is run.
- The `src/` folder contains the TypeScript source code.
- The `controllers/`, `models/`, and `routes/` folders are subfolders of `src/` that contain the corresponding typescript files for each component.
- `index.ts` in the `src/` folder is the entry point for the application.
- `.gitignore` contains files and directories that should be ignored by Git.
- `nodemon.json` contains settings for `nodemon`, the utility used for running the development server.
- `package.json` lists the dependencies and scripts for the project.
- `README.md` (this file) provides instructions and information about the project.
- `tsconfig.json` contains settings for TypeScript compiler.
