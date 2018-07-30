import React, {Component} from 'react'
import CodeMirror from 'react-codemirror'


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
require("codemirror/mode/htmlmixed/htmlmixed")
require("codemirror/mode/jsx/jsx")
require("codemirror/mode/markdown/markdown")



class MyCodeMirror extends Component {
	constructor (prop) {
		super(prop)
		let value = `console.log('hello world')`
		this.state = {
			value
		}
	}
	render () {
		const options = {
			mode: 'javascript',
			theme: 'material',
			tabSize: 2,
			lineWrapping: true,
			lineNumbers: true,
			autofocus: true,
			matchBrackets: true,
      keyMap: "vim",
      showCursorWhenSelecting: true,


		}
		return (
			<CodeMirror
				value={this.state.value}
				height='800px'
				options={options}
				onChange={(editor, data, value) => this.setState({value})}
				/>
			)
	}
}

export default MyCodeMirror