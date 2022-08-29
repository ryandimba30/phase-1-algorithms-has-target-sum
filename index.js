function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = {};
  
    for (const number of array) {
      // n steps
      const complement = target - number;
      if (complement in numbers) return true;
      numbers[number] = true;
    }
  
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function 
  if (a + b === target)
  return true
  else return false
*/

/*
  Add written explanation of your solution here
  write a function to check for pair that its sum is equal to the target
  returns true if that pair is found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
