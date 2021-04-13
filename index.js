function greet (name, owner) {
  // Add code here
  if (name === owner){
    return "Hello boss"
  }
  return "Hello guest"
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args)
    return min
  }
}

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let squareRoot = Math.sqrt(sq)
  let nextRoot = squareRoot + 1
  if(squareRoot % 1 !== 0){
    return -1;
  }
  return Math.pow(nextRoot, 2)
  
  
}

function isIsogram(str){
  return new Set(str.toLowerCase()).size === str.length
}