function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var len = collection.length;
  
  for (var i = 0; i < len; i++) {
    if (source in collection) {
    console.log("yes")
    } 
  }
  console.log(source) 
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

