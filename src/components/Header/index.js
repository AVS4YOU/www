import React from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'
import MenuWrapper from '../menu-wrapper'

const Header = (props) => (

  <MenuWrapper lang={props.lang} onLangClick={props.onLangClick} style={{ height: 60}}>
    <MenuItem menuItemText={props.t("Video software")}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    
    <MenuItem menuItemText={props.t("Audio software")}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    <MenuItem menuItemText={props.t("Free software")}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    <MenuItem menuItemText={props.t("Download")} isDropdown={false} />
    <MenuItem menuItemText={props.t("Buy now")} isDropdown={false} />
    <MenuItem menuItemText={props.t("Help center")}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
  </MenuWrapper>
)

export default Header;
