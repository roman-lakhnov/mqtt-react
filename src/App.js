import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MqttSettings from './MqttSettings'
import ModbusTCP from './ModbusTCP'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

const App = () => {
	return (
		<Router>
			<div>
				<Nav />
				<Routes>
        <Route path='/' element={<Home />} />
					<Route path='/MqttSettings' element={<MqttSettings />} />
					<Route path='/ModbusTCP' element={<ModbusTCP />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
