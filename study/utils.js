function debounce(fn, delay, ctx) {
  var timer = null;
  return function () {
    var context = ctx || this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function logError(err) {
  err = JSON.stringify(err);
  chrome.devtools.inspectedWindow.eval("console.error(\'" + err + "\');");
}

function log(msg) {
  chrome.devtools.inspectedWindow.eval("console.log(\'" + msg + "\');");
}

function xCharacters(number, string) {
  var buffer = '';
  for(var i = 0; i < number; i++) {
    buffer += string;
  }
  return buffer;
}