class ToyRobot {
  private readonly maxX: number = 5;
  private readonly maxY: number = 5;
  private xCoord: number | null = null;
  private yCoord: number | null = null;
  private faceDirection: string | null = null;

  constructor() {}

  place(x: number, y: number, facing: string): void {
    console.log('=============================');
    console.log('PLACE:', x, y, facing);

    if (this.isValidPosition(x, y) && this.isValidFacing(facing)) {
      this.xCoord = x;
      this.yCoord = y;
      this.faceDirection = facing.toUpperCase();
    }
  }

  /**
   * Method to move the robot one unit forward in the direction it is facing
   * */
  move(): void {
    // Check if the robot is placed on the table
    if (!this.isPlaced()) return;

    let newX = this.xCoord!;
    let newY = this.yCoord!;

    // Update new coordinates based on the current facing direction
    switch (this.faceDirection) {
      case 'NORTH':
        newY = Math.min(this.yCoord! + 1, this.maxY - 1);
        break;
      case 'EAST':
        newX = Math.min(this.xCoord! + 1, this.maxX - 1);
        break;
      case 'SOUTH':
        newY = Math.max(this.yCoord! - 1, 0);
        break;
      case 'WEST':
        newX = Math.max(this.xCoord! - 1, 0);
        break;
    }

    // Check if the new position is valid and update the robot's position
    if (this.isValidPosition(newX, newY)) {
      this.xCoord = newX;
      this.yCoord = newY;
    }

    console.log('MOVE');
  }

  /**
   * Method to rotate the robot 90 degrees to the left
   * */
  left(): void {
    // Check if the robot is placed on the table
    if (!this.isPlaced()) return;

    // Update facing direction based on the current facing direction
    switch (this.faceDirection) {
      case 'NORTH':
        this.faceDirection = 'WEST';
        break;
      case 'EAST':
        this.faceDirection = 'NORTH';
        break;
      case 'SOUTH':
        this.faceDirection = 'EAST';
        break;
      case 'WEST':
        this.faceDirection = 'SOUTH';
        break;
    }

    console.log('LEFT');
  }

  /**
   * Method to rotate the robot 90 degrees to the right
   * */
  right(): void {
    // Check if the robot is placed on the table
    if (!this.isPlaced()) return;

    // Update facing direction based on the current facing direction
    switch (this.faceDirection) {
      case 'NORTH':
        this.faceDirection = 'EAST';
        break;
      case 'EAST':
        this.faceDirection = 'SOUTH';
        break;
      case 'SOUTH':
        this.faceDirection = 'WEST';
        break;
      case 'WEST':
        this.faceDirection = 'NORTH';
        break;
    }

    console.log('RIGHT');
  }

  report(): string {
    // Check if the robot is placed on the table
    if (!this.isPlaced()) return '';

    // Return a string representing the current position and facing direction
    return `${this.xCoord},${this.yCoord},${this.faceDirection}`;
  }

  // Helper method to check if a position is valid on the table
  private isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.maxX && y >= 0 && y < this.maxY;
  }

  // Helper method to check if a facing direction is valid
  private isValidFacing(facing: string): boolean {
    return ['NORTH', 'EAST', 'SOUTH', 'WEST'].includes(facing.toUpperCase());
  }

  // Helper method to check if the robot is placed on the table
  private isPlaced(): boolean {
    return this.xCoord !== null && this.yCoord !== null && this.faceDirection !== null;
  }
}

export default ToyRobot;
