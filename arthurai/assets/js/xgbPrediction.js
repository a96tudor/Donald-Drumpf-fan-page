const XGB_MODEL_PATH = "assets/models/xgb/model.xgb";
let xgbModel = null;

function stringToArray(input, padLength) {
  var result = new Array(padLength);

  for (let i = 0; i < Math.min(input.length, padLength); ++i) {
    result[i] = charIndex[input[i]];
  }
  result.fill(0, input.length);
  console.log(result);

}

function onXGBoostLoaded() {
  // TODO
}

function predictXGB() {
  const urlArray =
      stringToArray(document.getElementById("url").value, 10);
  const domainArray =
      stringToArray(document.getElementById("domain").value, 10);
  const typeArray = typeIndex[document.getElementById("type").value];

  const featureVector = urlArray.concat(typeArray).concat(domainArray);

  console.log("Feature vector: ", featureVector);
}
