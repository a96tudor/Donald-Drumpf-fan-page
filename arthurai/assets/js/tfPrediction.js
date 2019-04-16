const MODEL_URL = 'assets/models/tf/tensorflowjs_model.pb';
const WEIGHTS_URL = 'assets/models/tf/weights_manifest.json';

let model = null;

let typeIndexTF = {};

function onTfLoaded() {
    for (var key in typeIndex) {
      typeIndexTF[key] = tf.tensor([typeIndex[key]]);
    }

    loadModel();
}

async function loadModel() {
    model = await tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);
}

function stringToTensor(text, padLength) {
    // Based on https://github.com/tensorflow/tfjs-examples/blob/master/sentiment/index.js#L60
    const inputText = text.trim().toLowerCase();
    const inputBuffer = tf.buffer([1, padLength], 'float32');
    for (let i = 0; i < inputText.length; ++i)
    {
      const chr = inputText[i];
      inputBuffer.set(charIndex[chr], 0, i);
    }
    return inputBuffer.toTensor();
}

function typeToTensor(inputType) {
    return typeIndexTF[inputType];
}

function predictTF() {
    const url = document.getElementById("url").value;
    const domain = document.getElementById("domain").value;
    const type = document.getElementById("type").value;
    const urlTensor = stringToTensor(url, URL_LENGTH);
    const domainTensor = stringToTensor(domain, DOMAIN_LENGTH);
    const typeTensor = typeToTensor(type);

    var t0 = performance.now();
    const result = model.predict({
        Placeholder: urlTensor,
        Placeholder_1: typeTensor,
        Placeholder_2: domainTensor
    }).dataSync();
    var t1 = performance.now();
    document.getElementById("resultTF").textContent = "Model thinks there's " + result[0].toFixed(4) * 100 + "% chance it's an ad";
    document.getElementById("latencyTF").textContent = "Latency: " + (t1 - t0) + "ms";
    blockitElement = document.getElementById("result-blockitTF");
    if (result[0] > 0.5) {
        blockitElement.textContent = "BLOCK IT!";
        blockitElement.className = "blockit";
    } else {
        blockitElement.textContent = "Don't block it";
        blockitElement.className = "dontblockit";
    }
}

function runTests() {
    const numOfIterations = 1000;
    const urlTensor = stringToTensor("https://google.com/ads.js", 512);
    const domainTensor = stringToTensor("adblockplus.org", 100);
    const typeTensor = typeToTensor("SCRIPT");
    var t0 = performance.now();
    model.predict({
        Placeholder: urlTensor,
        Placeholder_1: typeTensor,
        Placeholder_2: domainTensor
    }).print();
    var t1 = performance.now();
    console.log("Call to predict " + numOfIterations + " URLs took " + (t1 - t0) + " milliseconds.");
}
loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.0', onTfLoaded)
