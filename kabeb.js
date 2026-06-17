function kebabToCamel(str) {
  let result = "";
  let capitalizeNext = false;

  for (const char of str) {
    if (char === "-") {
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }
  }

  return result;
}

function getUserInput() {
  const input = require("prompt-sync");
  const get_input = input();

  let value = get_input("Enter hello-world: ").trim();

  const result = kebabToCamel(value);

  console.log("Kabeb value:", result);
}

getUserInput();
