const {sum, subtract} = require('../math')

let result, expected

//First test
result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

//Second test
result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

//Third test
result = sum(7, 3)
expected = 9
expect(result).toBeGreaterThan(expected)


function expect(actual){
  return {
    toBe(expected){
      isTheSame(actual, expected)
    },
    toEqual(expected){
      isTheSame(actual, expected)
    },
    toBeGreaterThan(expected){
      if(actual <= expected){
        throw new Error(`${actual} is not greater than ${expected}`)
      }
    }
  }
}

function isTheSame(actual, expected){
  if(actual !== expected){
    throw new Error(`${actual} is not equal to ${expected}`)
  }
}