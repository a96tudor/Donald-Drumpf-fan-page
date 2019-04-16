const MODEL_PATH = "assets/models/xgb/model.xgb";
let model = null;

function stringToArray(input, padLength) {
  var result = new Array(padLength);
  console.log(result);

}

function onXGBoostLoaded() {
  stringToArray("blah", 10);
}
