function sumAll(arr) {
  var sum = 0;

  sum = (Math.max(arr[0],arr[1]) - Math.min(arr[0],arr[1]) + 1) * (arr[0] + arr[1])/2 ;
  
  console.log(sum);
}

sumAll([1, 10]);

