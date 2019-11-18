import React from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'
import { useTranslation } from "react-i18next";


const Header = (props) => {
    const {t} = useTranslation();

    return (

        <MenuWrapper pageContext={props.pageContext} t={t} lang={props.lang} onLangClick={props.onLangClick} style={{ height: 60}}>
            <MenuItem menuItemText={t("Video software")}>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={t("Audio software")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={t("Free software")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
            <MenuItem menuItemText={t("Download")} isDropdown={false} />
            <MenuItem menuItemText={t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={t("Help center")}>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default Header;
