import React from 'react';

import logo from '../images/dark.svg';


class Navbar extends React.Component{
	render(){
		return (
			<div className="navBar">
				<img src={logo} alt="logo" className="logo" />
				<div className="navBar-actions">
					<span>Position</span>
					<span>Help</span>
					<span>Pro XV2274</span>
				</div>

			</div>
			);
	}
}

export default Navbar;