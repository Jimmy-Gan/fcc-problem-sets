function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var len = collection.length;
  var sourcekeylen = Object.keys(source).length;

// get [1]soure keys and [2]collection[i] keys in an array
// compare, pass only if all [1] exist in [2] and [1]values == [2]values;
// known issue : count does not work well.

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < sourcekeylen; j++){
      var keytocheck = Object.keys(source)[j];
      var count = 0;
      if (source[keytocheck] !== collection[i][keytocheck]) {
        console.log("no");
	break;
      }else {count++}
    }
    if (count === sourcekeylen) {arr.push(collection[i])};
  }
  console.log(arr); 
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
