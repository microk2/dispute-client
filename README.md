## Installation

1)  [Node.js](https://nodejs.org/) v18.13.0 or above.
2)  Open a terminal and run ```npm install -g yarn``` to install Yarn packet manager.
3)  Run ```yarn install``` to install all dependencies.
4)  Copy the ```.env.txt``` file and remove the .txt ending of the new file. Fill in the fields that are missing with your settings.
5)  Build source files by using ```yarn run build```. Check package.json for more scripts.
6)  Start the server in development mode with ```yarn run start-dev``` or ```yarn run start-dev-full``` (the last one will also clean previous build files and build again the source)
7)  Start the server in production mode with ```yarn run start-prod``` or ```yarn run start-prod-full``` (the last one will also clean previous build files and build again the source)
8)  The main script getting the request is in src/index.ts
