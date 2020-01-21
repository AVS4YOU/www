import React, { memo } from 'react'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuWrapper from '../menu-wrapper'

const Header = ({availableLocales, locale, t}) => {

    return (

        <MenuWrapper availableLocales={availableLocales} locale={locale} t={t} style={{ height: 60}}>
            <MenuItem menuItemText={t("Video software")}>
                <DropdownElement path="/avs-video-editor" headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                <DropdownElement path="/avs-free-video-converter" headerText="AVS Video Converter" descriptionText="Convert all key video formats"/>
                <DropdownElement path="/avs-video-remaker" headerText="AVS Video Remaker" descriptionText="Edit videos without reconversion"/>
            </MenuItem>
            <MenuItem menuItemText={t("Audio software")}>
                <DropdownElement path="/avs-audio-editor" headerText="AVS Audio Editor" descriptionText="Easily edit and create audio"/>
                <DropdownElement path="/avs-audio-converter" headerText="AVS Audio Converter" descriptionText="Convert all popular audio formats"/>
            </MenuItem>
            <MenuItem col={2} menuItemText={t("Free software")}>
                <DropdownElement path="/avs-free-media-player" headerText="AVS Media Player" descriptionText="Watch audio and video"/>
                <DropdownElement path="/avs-free-photo-editor" headerText="AVS Photo Editor" descriptionText="Edit and improve photos"/>
                <DropdownElement path="/avs-free-image-converter" headerText="AVS Image Converter" descriptionText="Convert and compress images"/>
                <DropdownElement path="/avs-free-document-converter" headerText="AVS Document Converter" descriptionText="Convert all kinds of documents"/>
                <DropdownElement path="/avs-free-disc-creator" headerText="AVS Disc Creator" descriptionText="Write DVD/CD/Blu-ray discs"/>
                <DropdownElement path="/avs-free-registry-cleaner" headerText="AVS Registry Cleaner" descriptionText="Clean and fix registry errors"/>
            </MenuItem>
            <MenuItem menuItemText={t("Download")} isDropdown={false} />
            <MenuItem menuItemText={t("Buy now")} isDropdown={false} />
            <MenuItem menuItemText={t("Help center")}>
                <DropdownElement path="/" headerText="Support form"/>
                <DropdownElement path="/" headerText="Guides"/>
                <DropdownElement path="/" headerText="Knowledge center"/>
                <DropdownElement path="/" headerText="FAQ"/>
            </MenuItem>
        </MenuWrapper>
    )
}

export default memo(Header);
