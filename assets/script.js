import CodeMirror from 'codemirror';
import emmetCodeMirror from 'emmet-codemirror'
require("emmet-codemirror/dist/emmet.js")
// addoons
require("codemirror/addon/dialog/dialog.js")
require("codemirror/addon/search/searchcursor.js")
require("codemirror/addon/edit/matchbrackets.js")
// vim key bindings
require('codemirror/keymap/vim');

// main css
require ('codemirror/lib/codemirror.css');


// theme
require("codemirror/theme/blackboard.css")
require("codemirror/theme/cobalt.css")
require("codemirror/theme/darcula.css")
require("codemirror/theme/material.css")
require("codemirror/theme/midnight.css")
require("codemirror/theme/solarized.css")


// language mode
require("codemirror/mode/php/php")
require('codemirror/mode/javascript/javascript');
require("codemirror/mode/css/css")
require("codemirror/mode/xml/xml")
require("codemirror/mode/htmlmixed/htmlmixed")
require("codemirror/mode/jsx/jsx")
require("codemirror/mode/markdown/markdown")

var myCodeMirror = CodeMirror(document.getElementById('editor'), {
  value: "function myScript(){return 100;}\n",
  lineNumbers: true,
  mode:  "htmlmixed",
  theme: "material",
  tabSize: 2,
  keyMap: 'vim',
	profile: 'xhtml' /* define Emmet output profile */

});
emmetCodeMirror(myCodeMirror)

