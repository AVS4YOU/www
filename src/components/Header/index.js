import React from 'react'
import Link from 'gatsby-link'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'

const Lang = ({ lang, onClick, selected }) => (
  <a style={{ color: 'yellow', marginRight: '10px', textDecoration: selected ? 'underline' : 'none', cursor: 'pointer' }} onClick={onClick}>
    {lang}
  </a>
)

const Header = (props) => (
  <div
  style={{
    background: 'rebeccapurple',
    marginBottom: '1.45rem'
  }} 
  >
    {console.log(props)}
    <div
      style={{ 
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem' 
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Lang lang='en' onClick={(e) => props.onLangClick('en')} selected={props.lang == 'en'} />
        <Lang lang='ro' onClick={(e) => props.onLangClick('ro')} selected={props.lang == 'ro'} />
      </h1>
      <div style={{ height: 60}}>
      <MenuItem menuItemText="Video software" backgroundColor='#32393e'>
          <MenuDropdown>
              <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
              <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
              <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
          </MenuDropdown>
      </MenuItem>
      </div>
      
    </div>
  </div>
)

export default Header
