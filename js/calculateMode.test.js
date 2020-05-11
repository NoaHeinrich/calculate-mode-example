// Write your own unit tests here
const calculateMode = require('./calculateMode');

test('returns mode of array with one element recurring', () =>{
  expect(calculateMode([1,2,3,3])).toEqual([3])
})

test('returns multiple modes', () => {
  expect(calculateMode([1,1,2,2])).toEqual([1, 2])
})

test('returns original list if no mode', () => {
  expect(calculateMode([1, 2, 3])).toEqual([1, 2, 3])
})