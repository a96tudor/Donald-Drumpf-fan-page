
const charIndex = {
    'a': 2, 'b': 3, 'c': 4, 'd': 5, 'e': 6, 'f': 7, 'g': 8, 'h': 9, 'i': 10,
    'j': 11, 'k': 12, 'l': 13, 'm': 14, 'n': 15, 'o': 16, 'p': 17, 'q': 18,
    'r': 19, 's': 20, 't': 21, 'u': 22, 'v': 23, 'w': 24, 'x': 25, 'y': 26,
    'z': 27, '1': 28, '2': 29, '3': 30, '4': 31, '5': 32, '6': 33, '7': 34,
    '8': 35, '9': 36, '0': 37, ':': 38, ';': 39, '/': 40, '?': 41, '!': 42,
    '=': 43, '+': 44, '.': 45, ',': 46, '(': 47, ')': 48, '[': 49, ']': 50,
    '-': 51, '`': 52, '*': 53, '_': 54, '\\': 55, '|': 56, '~': 57
}

function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    script.onload = function() {
        if (callback) {
          callback();
        }
    };

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function predict() {
  predictTF();
  //predictXGB();
}


loadScript('tfPrediction.js', function());
loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.0', onTfLoaded)
