let str = "aaaaabbaa";

let palindromStrs = [];
let reverese = str.split("").reverse("");

if (str == reverese) {
  palindromStrs.push(reverese);
}

for (let i = 0; i <= str.length - 1; i++) {
  let string = "";
  let reverseString = "";

  string = str.slice(i + 1, str.length);
  reverseString = string.split("").reverse("").join("");

  //   console.log(string + " " + reverseString);

  if (string == reverseString) {
    palindromStrs.push(string);
  }
}

console.log(palindromStrs);
