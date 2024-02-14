#  Robot code challenge instructions
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.  Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create a console application that can read in commands of the following form
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.  The origin (0,0) can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command.  The application should discard all commands in the sequence until a valid PLACE command has been executed.

MOVE will move the toy robot one unit forward in the direction it is currently facing.

LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
REPORT will announce the X,Y and F of the robot.  This can be in any form, but standard output is sufficient.

A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.

Input can be from a file, or from standard input, as the developer chooses.

Provide test data to exercise the application.

It is not required to provide any graphical output showing the movement of the toy robot.

# Constraints 
The toy robot must not fall off the table during movement.  This also includes the initial placement of the toy robot.  Any move that would cause the robot to fall must be ignored.

 
## Example Input and Output
```
a)----------------

PLACE 0,0,NORTH
MOVE
REPORT 
Output: 0,1,NORTH

b)----------------

PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST

c)----------------

PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```

### Features

- Minimal
- TypeScript v5
- Testing with Jest
- Linting with Eslint and Prettier
- VS Code debugger scripts
- Local development with Nodemon

## ⚒ How to Install

Clone the repo:

```bash
$ git clone --depth 1 git@github.com:ratribiana/toy-robot-simulator.git
```

Go to the directory and install the dependencies:

```bash
$ cd toy-robot-simulator
$ npm install or yarn install
```

### Scripts

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

```sh
npm run dev
```

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

```sh
npm run start
```

Builds the app at `build`, cleaning and deleting existing folder first.

```sh
npm run build
```
Runs the `jest` tests once.

```sh
npm run test
```

Run the `jest` tests in watch mode, waiting for file changes.

```sh
npm run test:dev
```

Format your code.

```sh
npm run prettier-format
```

Format your code in watch mode, waiting for file changes.

```sh
npm run prettier-watch`
```

