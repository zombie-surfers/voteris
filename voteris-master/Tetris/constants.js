//config and rules 

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const LINES_PER_LEVEL = 10;

const NO_OF_HIGH_SCORES = 10;


const KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38,
    //SPACE:32
  }


  const POINTS = {
    SINGLE: 100,
    DOUBLE: 300,
    TRIPLE: 500,
    TETRIS: 800,
    SOFT_DROP: 1,
    HARD_DROP: 2,
  };
  
const LEVEL = {
    0: 800,
    1: 720,
    2: 630,
    3: 550,
    4: 470,
    5: 380,
    6: 300,
    7: 220,
    8: 130,
    9: 100,
    10: 80,
    11: 80,
    12: 80,
    13: 70,
    14: 70,
    15: 70,
    16: 50,
    17: 50,
    18: 50,
    19: 30,
    20: 30,
    // 29+ is 20ms
  };

  const ROTATION = {
    LEFT: 'left',
    RIGHT: 'right'
  };


  const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
  ];

  const SHAPES = [
    [],
    
    [  //NUMBER ONE = CYAN LONG
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    
    ],
    [  //NUMBER TWO = BLUE EL
        [2,0,0],
        [2,2,2],
        [0,0,0]
    
    ],
    [  //NUMBER THREE = ORANGE EL
        [0,0,3],
        [3,3,3],
        [0,0,0]
        
    ], 
    [   //NUMBER FOUR = SQUARE BLOCK
        [4,4],
        [4,4]
    
    ],
    [  //NUMBER FIVE = RED ESSAY
        [0,5,5],
        [5,5,0],
        [0,0,0]
      
    ],
    [  //NUMBER SIX = T-block
        [0,6,0],
        [6,6,6],
        [0,0,0]
        
    
    ], 
    [  //NUMBER SEVEN = GREEN STEPS 
        [7,7,0],
        [0,7,7],
        [0,0,0]
       
    
    ],
   
   
   
   
   
   
   
   

  ];

  
  [COLORS, SHAPES, KEY, POINTS, LEVEL, ROTATION].forEach(item => Object.freeze(item));