function pigLatinHandler(text) {
  let textArray = text.toLowerCase().split(" ");
  let finalArray = [];
  const vowels = ["a", "e", "i", "o", "u", "y"]
  textArray.forEach(function(word) {
    if (vowels.includes(word[0])) {
      finalArray.push(word + "way");
    }  else if (word.slice(0, 2) === "qu") {
      finalArray.push(word.slice(2) + "quay");
    } else {
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          finalArray.push(word.slice(i, i + word.length) + word[i - 1] + "ay");
          break;
        }
      }
    }
  });
  console.log(finalArray);
}

pigLatinHandler("arguments with Quavo");
