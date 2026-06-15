function flattenArray(item) {
  const flattened = [];

  for (const array of item) {
    for (const result of array) {
      flattened.push(result);
    }
  }

  return flattened;
}

function getUserInput() {
  const input = require("prompt-sync");
  const get_input = input();

  let value = get_input("Enter a two dimentional array: ")
    .trim()
    .replace(/'/g, '"')
    .replace(/,\s*]/g, "]");

  try {
    const array = JSON.parse(value);

    const result = flattenArray(array);

    console.log("Flattened Array:", result);
  } catch (err) {
    console.log("Invalid array format. Please enter a valid 2D array.", err);
  }
}

getUserInput();
