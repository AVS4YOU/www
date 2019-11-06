import React from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";


const Header = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1050px)' });
    const {t} = useTranslation();

    return (

        <MenuWrapper t={t} isMobile={isMobile} lang={props.lang} onLangClick={props.onLangClick} style={{ height: 60}}>
            <MenuItem menuItemText={props.t("Video software")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={props.t("Audio software")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={props.t("Free software")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={props.t("Download")} isDropdown={false} />
            <MenuItem menuItemText={props.t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={props.t("Help center")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default Header;
