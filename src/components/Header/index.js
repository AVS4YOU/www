import React from 'react'
import Link from 'gatsby-link'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'
import MenuWrapper from '../menu-wrapper'
import { Trans, withI18n } from '@lingui/react'

const Header = (props) => (

  <MenuWrapper lang={props.lang} onLangClick={props.onLangClick} style={{ height: 60}}>
    <MenuItem menuItemText={<Trans>Video software</Trans>}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    
    <MenuItem menuItemText={<Trans>Audio software</Trans>}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    <MenuItem menuItemText={<Trans>Free software</Trans>}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
    <MenuItem menuItemText={<Trans>Download</Trans>} isDropdown={false} />
    <MenuItem menuItemText={<Trans>Buy now</Trans>} isDropdown={false} />
    <MenuItem menuItemText={<Trans>Help center</Trans>}>
        <MenuDropdown>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
        </MenuDropdown>
    </MenuItem>
  </MenuWrapper>
)

export default Header;
