import React, { memo } from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'

const Header = ({availableLocales, locale, t}) => {

    return (

        <MenuWrapper availableLocales={availableLocales} locale={locale} t={t} style={{ height: 60}}>
            <MenuItem menuItemText={t("Video software")}>
                <DropdownElement path="/avs-video-editor.aspx" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement path="/avs-free-video-converter.aspx" headerText="AVS Video Converter" descriptionText="Convert all key video formats"/>
                <DropdownElement path="/avs-video-remaker.aspx" headerText="AVS Video Remaker" descriptionText="Edit videos without reconversion"/>
            </MenuItem>
            <MenuItem menuItemText={t("Audio software")}>
                <DropdownElement path="/avs-audio-editor.aspx" headerText="AVS Audio Editor" descriptionText="Easily edit and create audio"/>
                <DropdownElement path="/avs-audio-converter.aspx" headerText="AVS Audio Converter" descriptionText="Convert all popular audio formats"/>
            </MenuItem>
            <MenuItem menuItemText={t("Free software")}>
                <DropdownElement path="/avs-free-media-player.aspx" headerText="AVS Media Player" descriptionText="Watch audio and video"/>
                <DropdownElement path="/avs-free-video-converter.aspx" headerText="AVS Video Converter" descriptionText="Convert all key video formats"/>
            </MenuItem>
            <MenuItem path="/download" menuItemText={t("Download")} isDropdown={false} />
            <MenuItem path="/register" menuItemText={t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={t("Help center")}>
                <DropdownElement path="/support" headerText="Support form"/>
                <DropdownElement href="https://www.avs4you.com/guides/index.aspx" headerText="Guides"/>
                <DropdownElement href="https://onlinehelp.avs4you.com/index.aspx" headerText="Knowledge center"/>
                <DropdownElement href="https://support.avs4you.com/faq.aspx" headerText="FAQ"/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default memo(Header);
