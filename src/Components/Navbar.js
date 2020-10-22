import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '10px',
  padding: '1px',
  margin: '0 20px 7px',
  background: '#7C4F2C',
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Secular One',
  fontsize: '60',
  textAlign: 'right',
  position: 'right',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#A2AFB0'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#A2AFB0'
          }}
        >About</NavLink>
        <NavLink
          to="/contact"
          exact
          style={link}
          activeStyle={{
            background: '#A2AFB0'
          }}
        >Contact</NavLink>
          <NavLink
          to="/location"
          exact
          style={link}
          activeStyle={{
            background: '#A2AFB0'
          }}
        >Location</NavLink>
      </div>
    )
  }
}
 
export default Navbar;