import ToyRobot from '@/helpers/robot';

const robot = new ToyRobot();

robot.place(0, 0, 'NORTH');
robot.move();
console.log('Output:', robot.report()); // Output: 0,1,NORTH

robot.place(0, 0, 'NORTH');
robot.left();
console.log('Output:', robot.report()); // Output: 0,0,WEST

robot.place(1, 2, 'EAST');
robot.move();
robot.move();
robot.left();
robot.move();
console.log('Output:', robot.report());
