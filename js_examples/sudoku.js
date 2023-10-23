        // *SUDOKU ÇÖZME*
//         ARRAY METODLARI KULLANARAK ÇÖZEBİLİR MİYİM
// *while ile için de 0 varsa devam çözmeye FİLTER
//* 0 ı bul satır sütün 3x3 kkonrol et
// *SATIR SEÇME x var mı, SUTUN SEÇME x var mı, 3x3 x var mı
// *array methodları 

// javaScript'teki array metodları olan map, filter ve reduce gibi fonksiyonları kullanarak bir Sudoku çözücüsü yazmak mümkün olabilir, ancak bu metodlar genellikle çözümün bir parçası olacak ve muhtemelen daha karmaşık algoritmaları da içerecektir. Sudoku çözücüsü genellikle bir tür geriye dönük arama (backtracking) algoritması kullanır.
// Aşağıda, bu metodları kullanarak bir Sudoku çözücüsü yazmanın bir örneğini bulabilirsiniz. Bu örnekte, Sudoku tahtasını bir dizi olarak temsil ediyoruz ve her hücreyi bir nesne olarak temsil ediyoruz. Her hücrenin bir değeri (0 boş hücreyi temsil eder) ve bir konumu vardır.
// javascript


const test1=[
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ]
  let test2 = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7]
];
  

function sudokuCoz(board){
let isValid=false
while(!isValid){










    
for (let satir of board){
   isValid= satir.every((x)=>x>0)
   if(!isValid){
    break
   }

   }
   //?for of ile hala 0 var mı kontrolü yaptım
}



return board

}


// sudokuCoz(test1)






}











function solveSudoku(board) {
    const findEmptyCell = (board) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            return [row, col];
          }
        }
      }
      return null;
    };
  
    const isValid = (board, num, pos) => {
      const [row, col] = pos;
  
      const isRowValid = !board[row].includes(num);
      const isColValid = !board.some((row) => row[col] === num);
  
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      const isBoxValid = !board
        .slice(startRow, startRow + 3)
        .reduce((acc, row) => acc.concat(row.slice(startCol, startCol + 3)), [])
        .includes(num);
  
      return isRowValid && isColValid && isBoxValid;
    };
  
    const solve = () => {
      const emptyCell = findEmptyCell(board);
  
      if (emptyCell === null) {
        return true;
      }
  
      const [row, col] = emptyCell;
  
      for (let num = 1; num <= 9; num++) {
        if (isValid(board, num, [row, col])) {
          board[row][col] = num;
  
          if (solve()) {
            return true;
          }
  
          board[row][col] = 0;
        }
      }
  
      return false;
    };
  
    solve();
    return board;
  }
  

  




function solveSudoku(board) {
    let emptyPositions = saveEmptyPositions(board);

    for(let i = 0; i < emptyPositions.length;) {
        let row = emptyPositions[i][0];
        let col = emptyPositions[i][1];
        let value = board[row][col] + 1;
        let found = false;

        while(!found && value <= 9) {
            if(checkValue(board, row, col, value)) {
                found = true;
                board[row][col] = value;
                i++;
            } 
            else {
                value++;
            }
        }

        if(!found) {
            board[row][col] = 0;
            i--;
        }
    }

    return board;
}

function saveEmptyPositions(board) {
    let emptyPositions = [];

    board.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if(value === 0) {
                emptyPositions.push([rowIndex, colIndex]);
            }
        });
    });

    return emptyPositions;
}

function checkValue(board, row, col, value) {
    return checkRow(board, row, value) && checkColumn(board, col, value) && checkSquare(board, row, col, value);
}

function checkRow(board, row, value) {
    return board[row].every(val => val !== value);
}

function checkColumn(board, col, value) {
    return board.every(row => row[col] !== value);
}

function checkSquare(board, row, col, value) {
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for(let i = startRow; i < startRow + 3; i++) {
        for(let j = startCol; j < startCol + 3; j++) {
            if(board[i][j] === value) {
                return false;
            }
        }
    }

    return true;
}
// Bu kod, Sudoku tahtasını çözmeye çalışır ve her adımda geçerli bir sayıyı kontrol eder. Eğer hiçbir sayı geçerli değilse, geriye dönüş yapar ve bir önceki hücreye geçer. Bu, bir çözüm bulana kadar devam eder.
// Source: ChatGPT 