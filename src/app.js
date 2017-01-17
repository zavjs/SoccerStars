import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from 'components/App'

const Routes = () => 
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>

ReactDOM.render(<Routes />, document.getElementById("app")); 