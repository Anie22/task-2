function findCommonNumbers(arrays) {
  if (arrays.length === 0) return [];

  let common = arrays[0];

  for (let i = 1; i < arrays.length; i++) {
    common = common.filter((num) => arrays[i].includes(num));
  }

  return [...new Set(common)];
}

function getUserInput() {
  const input = require("prompt-sync");
  const get_input = input();

  let value = get_input("Enter arrays (e.g. [1,2,3], [3,4,2], [4,3,2]): ").trim();

  try {
    const arrays = JSON.parse(`[${value}]`);

    const result = findCommonNumbers(arrays);

    console.log("Common Numbers:", result);
  } catch (err) {
    console.log("Invalid array format.");
  }
}

getUserInput();
