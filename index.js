let name = "Harry"
console.log(name.length) // 5

let nameWithEscapeSeq = "Harry\""
console.log(nameWithEscapeSeq.length) // 6

console.log(name.toUpperCase()) // HARRY
console.log(name.toLowerCase()) // harry
console.log(name.slice(2, 4)) // rr
// show string from 2nd index to 3rd index
console.log(name.slice(2)) // rry
// show string from 2nd index 
console.log(name.replace("Har", "Per"))  //Perry

let friend = "Naman"
console.log(name.concat(" is a friend of ",friend," Ok"))
// concate 3 strings within braces with "name" string 
// Harry is a friend of Naman Ok

let friend2 = "      Meena        "
console.log(friend2) //"       Meena        " 
console.log(friend2.trim()) // Meena
// trim will remove unnecessary spaces

let friend3 = "Raman" + "Shivika" + "Harry"
console.log(friend3[0]) // R
console.log(friend3[1]) // a
console.log(friend3[2]) // m
console.log(friend3[3]) // a

// friend3[4]= "o" // This is not possible
// we cannot change string
// string is "immutable" 

console.log(friend3) // RamanShivikaHarry

// QuickQuiz: Use a for loop to print a string

/* 
charAt(index): Returns the character at the specified index in the string.

charCodeAt(index): Returns the Unicode value of the character at the specified index in the string.

concat(str1, str2, ..., strN): Joins two or more strings together.

endsWith(searchString, length): Determines whether a string ends with the specified character(s).

indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.

lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string.

replace(searchValue, replaceValue): Replaces a specified value with another value in a string.

slice(startIndex, endIndex): Extracts a part of a string and returns it as a new string.

split(separator, limit): Splits a string into an array of substrings.

startsWith(searchString, position): Determines whether a string begins with the specified character(s).

substr(startIndex, length): Extracts a specified number of characters from a string, starting at a specified index.

substring(startIndex, endIndex): Extracts the characters between two specified indices in a string.

toLocaleLowerCase(): Converts a string to lowercase, according to the host's current locale.

toLocaleUpperCase(): Converts a string to uppercase, according to the host's current locale.

toLowerCase(): Converts a string to lowercase.

toString(): Returns a string representation of an object.

toUpperCase(): Converts a string to uppercase.

trim(): Removes whitespace from both ends of a string. */

console.log("")
let str = "Hello, World! ";
let indexToChange = 7;
let newChar = "W";

console.log("Original String: " + str); // Output: " Hello, World! "
console.log("charAt(7): " + str.charAt(indexToChange)); // Output: "W"
console.log("charCodeAt(7): " + str.charCodeAt(indexToChange)); // Output: "87"
console.log("concat(' Goodbye!'): " + str.concat(" Goodbye!")); // Output: " Hello, World!  Goodbye!"
console.log("endsWith('World!'): " + str.endsWith("World!")); // Output: "true"
console.log("indexOf('o'): " + str.indexOf("o")); // Output: "5"
console.log("lastIndexOf('o'): " + str.lastIndexOf("o")); // Output: "14"
console.log("replace('o', 'a'): " + str.replace("o", "a")); // Output: " Hella, Warld! "
console.log("slice(7, 12): " + str.slice(7, 12)); // Output: "World"
console.log("split(','): " + str.split(",")); // Output: [" Hello", " World! "]
console.log("startsWith(' Hello'): " + str.startsWith(" Hello")); // Output: "true"
console.log("substr(7, 5): " + str.substr(7, 5)); // Output: "World"
console.log("substring(7, 12): " + str.substring(7, 12)); // Output: "World"
console.log("toLocaleLowerCase(): " + str.toLocaleLowerCase()); // Output: " hello, world! "
console.log("toLocaleUpperCase(): " + str.toLocaleUpperCase()); // Output: " HELLO, WORLD! "
console.log("toLowerCase(): " + str.toLowerCase()); // Output: " hello, world! "
console.log("toString(): " + str.toString()); // Output: " Hello, World! "
console.log("toUpperCase(): " + str.toUpperCase()); // Output: " HELLO, WORLD! "
console.log("trim(): " + str.trim()); // Output: "Hello, World!"
