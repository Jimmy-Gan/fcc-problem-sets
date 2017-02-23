function translatePigLatin(str) {
  var newstr = '';
  for (i=0;i<str.length;i++) {
    if ('aeiouAEIOU'.includes(str[0]))  {
    newstr = str + 'way';
    i++;
    }
    else {
      newstr = newstr.push(str.substring(1)) + str[0] + 'ay';
      i++;
    }
  }
  return newstr;
  }

translatePigLatin("glove");

