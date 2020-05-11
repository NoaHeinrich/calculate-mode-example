// Write a function to calculate mode that takes LIST as an input
// Get number of occurrences of each item in LIST
//  Create an OBJECT called OCCURRENCES
  // Every KEY should be an object in the list, every value should be the number of occurrences
  // ITERATE THROUGH LIST
  // IF value in LIST is KEY in OCCURRENCES, then OCCURRENCES[KEY] += 1
  // ELSE OCCURENCES[KEY] = 1 
  // SORT IN REVERSE ORDER, and RETURN TOP VALUES
const convert_key = (key) => {
  if (Number(key)) {
    return Number(key)
  } else {
    return key
  }
}

const convert_list_to_object = (list) => {
  let occurrences = {}
  for(let i = 0; i < list.length; i++) {
    if (list[i] in occurrences) {
      occurrences[list[i]] += 1
    } else {
      occurrences[list[i]] = 1
    }
  }
  return occurrences
}

const calculate_mode = (list) => {
  let occurrences = convert_list_to_object(list)
  // let keys = Object.keys(occurrences)
  let results = []
  let maxValue = 0
  for (let key in occurrences) {
    if (occurrences[key] > maxValue) {
      maxValue = occurrences[key]
      results = []
      results.push(convert_key(key))
    } else if (occurrences[key] == maxValue) {
      results.push(convert_key(key))
    }
  }
  return results
}
console.log(calculate_mode([1,"bacon", "bacon", 1, 2, 3]))
module.exports = calculate_mode