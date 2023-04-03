

  const prompt = require('prompt-sync')({sigint: true});

  const hat = '^';
  const hole = 'O';
  const fieldCharacter = '░';
  const pathCharacter = '*';
  
  class Field {
    constructor(field) {
      this.field = field;
    }
    
    // create field
    static generateField(height, width, holePercentage) {
      const totalCells = height * width;
      const numHoles = Math.floor(totalCells * (holePercentage / 100));
      const field = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter));
      const hatColumn = Math.floor(Math.random() * width);
      field[0][hatColumn] = hat;
      let holesAdded = 0;
      while (holesAdded < numHoles) {
        const row = Math.floor(Math.random() * height);
        const column = Math.floor(Math.random() * width);
        if (field[row][column] === fieldCharacter) {
          field[row][column] = hole;
          holesAdded++;
        }
      }
      return field;
    }
  }
      
  
  const field = Field.generateField(5, 5, 20);
  for (let i = 0; i < field.length; i++) {
    console.log(field[i].join(''));
  }
  console.log(field[0][0]);