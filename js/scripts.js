function pigLatinHandler(text) {
  let textArray = text.split(" ");
  let singleTextArray = [];
  let altTextArray = [];
  let finalArray = [];
  for (let i = 0; i < textArray.length; i++) {
    singleTextArray = textArray[i].split("");
    for (let j = 0; j < singleTextArray.length; j++) {
      if (singleTextArray[j] === "q" && singleTextArray[j + 1] === "u") {
        altTextArray = singleTextArray.slice(2, singleTextArray.length + 1);
        altTextArray.push("quay");
        finalArray.push(altTextArray.join(""));
      } else if (singleTextArray[0] === "a" || singleTextArray[0] === "e" || singleTextArray[0] === "i" || singleTextArray[0] === "o" || singleTextArray[0] === "u" || singleTextArray[0] === "y") {
        singleTextArray.join("");
        finalArray.push(singleTextArray);
        console.log(altTextArray);
       } //else if (singleTextArray[j] === "a" || singleTextArray[j] === "e" || singleTextArray[j] === "i" || singleTextArray[j] === "o" ||singleTextArray[j] === "u" ||singleTextArray[j] === "y") {
        
      // }
    }
  }
}

pigLatinHandler("aello quail");
