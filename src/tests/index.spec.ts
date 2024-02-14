import ToyRobot from '../helpers/robot';

describe('Toy Robot Simulator Tests', () => {
  let robot: ToyRobot;

  beforeEach(() => {
    robot = new ToyRobot();
  });

  // Test block for the place method
  describe('PLACE method', () => {
    test('Places the robot on the table at the specified position and facing direction', () => {
      robot.place(0, 0, 'NORTH');
      expect(robot.report()).toBe('0,0,NORTH');
    });

    test('Ignores invalid position and facing direction', () => {
      robot.place(-1, 0, 'NORTH'); // Invalid position
      expect(robot.report()).toBe('');
      robot.place(0, 0, 'INVALID'); // Invalid facing direction
      expect(robot.report()).toBe('');
    });
  });

  // Test block for the move method
  describe('MOVE method', () => {
    test('Moves the robot one unit forward in the direction it is facing', () => {
      robot.place(0, 0, 'NORTH');
      robot.move();
      expect(robot.report()).toBe('0,1,NORTH');
    });

    test('Ignores move command if the robot is not placed on the table', () => {
      robot.move();
      expect(robot.report()).toBe('');
    });

    test('Prevents the robot from falling off the table', () => {
      robot.place(0, 4, 'NORTH');
      robot.move(); // Should not fall off the table
      expect(robot.report()).toBe('0,4,NORTH');
      robot.place(0, 0, 'SOUTH');
      robot.move(); // Should not fall off the table
      expect(robot.report()).toBe('0,0,SOUTH');
    });
  });

  // Test block for the left method
  describe('LEFT method', () => {
    test('Rotates the robot 90 degrees to the left facing NORTH', () => {
      robot.place(0, 0, 'NORTH');
      robot.left();
      expect(robot.report()).toBe('0,0,WEST');
    });

    test('Rotates the robot 90 degrees to the left facing SOUTH', () => {
      robot.place(0, 0, 'SOUTH');
      robot.left();
      expect(robot.report()).toBe('0,0,EAST');
    });

    test('Rotates the robot 90 degrees to the left facing EAST', () => {
      robot.place(0, 0, 'EAST');
      robot.left();
      expect(robot.report()).toBe('0,0,NORTH');
    });

    test('Rotates the robot 90 degrees to the left facing WEST', () => {
      robot.place(0, 0, 'WEST');
      robot.left();
      expect(robot.report()).toBe('0,0,SOUTH');
    });

    test('ignores left command if the robot is not placed on the table', () => {
      robot.left();
      expect(robot.report()).toBe('');
    });
  });

  // Test block for the right method
  describe('RIGHT method', () => {
    test('Rotates the robot 90 degrees to the right facing NORTH', () => {
      robot.place(0, 0, 'NORTH');
      robot.right();
      expect(robot.report()).toBe('0,0,EAST');
    });

    test('Rotates the robot 90 degrees to the right facing SOUTH', () => {
      robot.place(0, 0, 'SOUTH');
      robot.right();
      expect(robot.report()).toBe('0,0,WEST');
    });

    test('Rotates the robot 90 degrees to the right facing EAST', () => {
      robot.place(0, 0, 'EAST');
      robot.right();
      expect(robot.report()).toBe('0,0,SOUTH');
    });

    test('Rotates the robot 90 degrees to the right facing WEST', () => {
      robot.place(0, 0, 'WEST');
      robot.right();
      expect(robot.report()).toBe('0,0,NORTH');
    });

    test('Ignores right command if the robot is not placed on the table', () => {
      robot.right();
      expect(robot.report()).toBe('');
    });
  });

  // Test block for the report method
  describe('Report method', () => {
    test('Reports the current position and facing direction of the robot', () => {
      robot.place(1, 2, 'EAST');
      expect(robot.report()).toBe('1,2,EAST');
    });

    test('Returns an empty string if the robot is not placed on the table', () => {
      expect(robot.report()).toBe('');
    });
  });
});
