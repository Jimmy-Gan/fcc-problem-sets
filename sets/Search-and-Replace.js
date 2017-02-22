function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {  
    after = after[0].toUpperCase()+after.substring(1);
  }
  
  var newstr = str.replace(before,after);
  
  return newstr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

