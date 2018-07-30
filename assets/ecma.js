import React, {Component} from 'react'
import {render} from 'react-dom'
import Editor from './MyCodeMirror'

const App = function () {
	return <div>Hello world for editor</div>
}

render(<Editor />, document.getElementById('editor'))


