const XGB_MODEL_PATH = "assets/models/xgb/model.xgb";
let xgbModel = null;

function stringToArray(input, padLength) {
  var result = new Array(padLength);

  for (let i = 0; i < input.length; ++i) {
    result[i] = charIndex[input[i]];
  }
  result.fill(0, input.length);
  console.log(result);

}

function onXGBoostLoaded() {
  // TODO
}

function predictXGB() {
  stringToArray("blah", 10);
}
