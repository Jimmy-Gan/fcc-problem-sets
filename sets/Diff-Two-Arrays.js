function diffArray(arr1, arr2) {
  var newArr = [];
  
  function oneintwo (val) {
    return arr2.indexOf(val) === -1;
  }
  
  function twoinone (val) {
    return arr1.indexOf(val) === -1;
  }

  Arr1left = arr1.filter(oneintwo);
  Arr2left = arr2.filter(twoinone);
  // Same, same; but different.
  // return newArr;
  newArr = Arr1left.concat(Arr2left);
  console.log(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

