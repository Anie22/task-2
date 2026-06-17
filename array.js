function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (const num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      result.push(num);
    }
  }

  return result;
}

function getUserInput() {
  const input = require("prompt-sync");
  const get_input = input();

  let value = get_input(
    "Enter arrays (e.g. [1, 1, 1, 2, 3, 3, 4, 5, 6, 7]): ",
  )
    .replace(/'/g, '"')
    .trim();

  try {
    const arrays = JSON.parse(value);

    const result = removeDuplicates(arrays);

    console.log("Array without duplicates:", result);
  } catch (err) {
    console.log("Invalid array format.");
  }
}

getUserInput();
