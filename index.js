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

function isIsogram(str){
  //...
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++){
    if(str.indexOf(str[i])!==str.lastIndexOf(str[i])){
      return false
    }
  }
  return true
}

function isTriangle(a,b,c)
{
 let big = Math.max(a, b, c);
 let sum = a + b + c;
 if (sum - big > big){
   return true
 }
 
return false;
}

var maxProfit = function(prices) {
  let profit = 0
  let dayOne = prices[0]
  for(let i = 0; i < prices.length; i++){
      let difference = prices[i] - dayOne;
      if (dayOne > prices[i]){
          dayOne = prices[i]
      }
      if(profit < difference){
         profit = difference 
      }
  }
  return profit
  
};

const runningSum = function(nums) {
    let total = 0
    //loop through the num array
    for(let i = 0; i < nums.length; i++){
        //add the previous number to the current number and set it to equal the current number
        total= nums[i] + total
        nums[i] = total
    }
    //return nums
    return nums
    total = 0
};

function getMiddle(s){
  //Code goes here!
  let length = s.length;
  let middle = Math.floor(length/2);
  
  if (length%2 === 0){
    return s[middle - 1] + s[middle]
  }else{
    return s[middle]
  }
}
