const URL_LENGTH = 512;
const DOMAIN_LENGTH = 100;

const charIndex = {
    'a': 2, 'b': 3, 'c': 4, 'd': 5, 'e': 6, 'f': 7, 'g': 8, 'h': 9, 'i': 10,
    'j': 11, 'k': 12, 'l': 13, 'm': 14, 'n': 15, 'o': 16, 'p': 17, 'q': 18,
    'r': 19, 's': 20, 't': 21, 'u': 22, 'v': 23, 'w': 24, 'x': 25, 'y': 26,
    'z': 27, '1': 28, '2': 29, '3': 30, '4': 31, '5': 32, '6': 33, '7': 34,
    '8': 35, '9': 36, '0': 37, ':': 38, ';': 39, '/': 40, '?': 41, '!': 42,
    '=': 43, '+': 44, '.': 45, ',': 46, '(': 47, ')': 48, '[': 49, ']': 50,
    '-': 51, '`': 52, '*': 53, '_': 54, '\\': 55, '|': 56, '~': 57
}

const typeIndex =  {
      'SCRIPT':           [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'SUBDOCUMENT':      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'IMAGE':            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'XMLHTTPREQUEST':   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      'FONT':             [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      'DOCUMENT':         [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      'STYLESHEET':       [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      'OTHER':            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      'PING':             [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      'WEBSOCKET':        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      'MEDIA':            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      'OBJECT':           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
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
  predictXGB();
}

loadScript('assets/js/tfPrediction.js', function(){});
loadScript('assets/js/xgbPrediction.js', function(){});
