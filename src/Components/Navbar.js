import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '10px',
  padding: '1px',
  margin: '0 20px 7px',
  background: '#B1A2A2',
  textDecoration: 'none',
  color: 'white',
  fontFamily: 'Secular One',
  fontsize: '60',
  textAlign: 'right',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
 
export default Navbar;