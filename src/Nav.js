import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<ul className='navbar-nav'>
      <li className='nav-item'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/MqttSettings' className='nav-link'>
						MqttSettings
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/ModbusTCP' className='nav-link'>
						ModbusTCP
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
