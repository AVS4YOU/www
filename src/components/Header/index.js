import React, { memo } from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'


const Header = ({availableLocales, className, locate, t}) => {

    return (

        <MenuWrapper availableLocales={availableLocales} locate={locate} t={t} style={{ height: 60}}>
            <MenuItem menuItemText={t("Video software")}>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Converter" descriptionText="Convert all key video formats"/>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Remaker" descriptionText="Edit videos without reconversion"/>
            </MenuItem>
            <MenuItem menuItemText={t("Audio software")}>
                <DropdownElement headerText="AVS Audio Editor" descriptionText="Easily edit and create audio"/>
                <DropdownElement headerText="AVS Audio Converter" descriptionText="Convert all popular audio formats"/>
            </MenuItem>
            <MenuItem col={2} menuItemText={t("Free software")}>
                <DropdownElement headerText="AVS Media Player" descriptionText="Watch audio and video"/>
                <DropdownElement headerText="AVS Photo Editor" descriptionText="Edit and improve photos"/>
                <DropdownElement headerText="AVS Image Converter" descriptionText="Convert and compress images"/>
                <DropdownElement headerText="AVS Document Converter" descriptionText="Convert all kinds of documents"/>
                <DropdownElement headerText="AVS Disc Creator" descriptionText="Write DVD/CD/Blu-ray discs"/>
                <DropdownElement headerText="AVS Registry Cleaner" descriptionText="Clean and fix registry errors"/>
            </MenuItem>
            <MenuItem menuItemText={t("Download")} isDropdown={false} />
            <MenuItem menuItemText={t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={t("Help center")}>
                <DropdownElement headerText="Support form"/>
                <DropdownElement headerText="Guides"/>
                <DropdownElement headerText="Knowledge center"/>
                <DropdownElement headerText="FAQ"/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default memo(Header);
