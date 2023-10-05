import React, { memo } from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'

const Header = ({availableLocales, locale, t}) => {

    return (

        <MenuWrapper availableLocales={availableLocales} locale={locale} t={t} style={{ height: 60}}>
            <MenuItem menuItemText={t("Video software")}>
                <DropdownElement id="avs-ve_header" path="/avs-video-editor.aspx" headerText="AVS Video Editor" descriptionText={t("Easily edit and create videos")}/>
                <DropdownElement id="avs-free-vc1_header" path="/avs-free-video-converter.aspx" headerText="AVS Video Converter" descriptionText={t("Convert all key video formats")}/>
                <DropdownElement id="avs-vr_header" path="/avs-video-remaker.aspx" headerText="AVS Video Remaker" descriptionText={t("Edit videos without reconversion")}/>
            </MenuItem>
            <MenuItem menuItemText={t("Audio software")}>
                <DropdownElement id="avs-ae_header" path="/avs-audio-editor.aspx" headerText="AVS Audio Editor" descriptionText={t("Easily edit and create audio")}/>
                <DropdownElement id="avs-free-ac1_header" path="/avs-free-audio-converter.aspx" headerText="AVS Audio Converter" descriptionText={t("Convert all popular audio formats")}/>
            </MenuItem>
            <MenuItem menuItemText={t("Free software")}>
                <DropdownElement id="avs-free-mp_header" path="/avs-free-media-player.aspx" headerText="AVS Media Player" descriptionText={t("Watch audio and video")}/>
                <DropdownElement id="avs-free-vc2_header" path="/avs-free-video-converter.aspx" headerText="AVS Video Converter" descriptionText={t("Convert all key video formats")}/>
                <DropdownElement id="avs-free-ac2_header" path="/avs-free-audio-converter.aspx" headerText="AVS Audio Converter" descriptionText={t("Convert all popular audio formats")}/>
                <DropdownElement id="avs-free-ic_header" path="/avs-free-image-converter.aspx" headerText="AVS Image Converter" descriptionText={t("Convert all key image formats")}/>
            </MenuItem>
            <MenuItem id="downloads_header" path="/downloads.aspx" menuItemText={t("Download")} isDropdown={false} />
            <MenuItem id="register_header" path="/register.aspx" menuItemText={t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={t("Help center")}>
                <DropdownElement id="support-form_header" href={t("header_support_avs4you")} headerText={t("Support form")}/>
                <DropdownElement id="guides_header" href={t("header_avs4you_guides")} headerText={t("Guides")}/>
                <DropdownElement id="knowledge-center_header" href={t("header_onlinehelp_avs4you")} headerText={t("Knowledge center")}/>
                <DropdownElement id="faq_header" href={t("header_support_avs4you_faq")} headerText={t("FAQ")}/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default memo(Header);
