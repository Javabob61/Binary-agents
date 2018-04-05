function binaryAgent(str) {
  var myNumbers = str.split(" "); // creates an array of individual binary codes for letters.
  var myAns = []; // an array to hold binary converted to letters.

  for (var i = 0; i < myNumbers.length; i++) { // converts numbers to letters and stores in myAns.
    myAns.push(String.fromCharCode(binToDec(myNumbers[i])));
  }

  function binToDec(arr) {
    // a function to convert binary to decimal.
    return parseInt(arr, 2);
  }

  console.log(myAns.toString().replace(/,/g, ""));
  return myAns.toString().replace(/,/g, "");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);