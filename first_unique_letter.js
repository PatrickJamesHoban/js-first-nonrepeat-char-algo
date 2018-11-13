// PSEUDOCODE
// search for the first and last index of that letter in the string
// if first and last index match, return that letter
// else, return an empty string

// CODE
function firstNonRepeatingLetter(s) {
  // var s1 = s;
  var s2 = s.toLowerCase();  // .split("");
  // console.log(s2)
  // var l = '';
  for (let i=0; i < s.length; i++) {
    // console.log(i);
    // var restOfString = s2.slice(i)
    // console.log(l)
    // console.log(s.charAt(i)); 
    // console.log(s2.charAt(i))
    // console.log(s2.lastIndexOf(s2.charAt(i)));
    // console.log(s2.indexOf(s2.charAt(i)));
    if (s2.lastIndexOf(s2.charAt(i)) == s2.indexOf(s2.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "";
}

// DRIVER / TEST CODE
console.log(firstNonRepeatingLetter('STress')); // expect 'T'
console.log(firstNonRepeatingLetter('a')); // expect 'a'
console.log(firstNonRepeatingLetter('MoOnMEn')); // expect 'E'
console.log(firstNonRepeatingLetter("OoNnLLYYrrEpPeAatTsS")); // expect ""
