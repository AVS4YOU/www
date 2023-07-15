import React from "react";
import Text from "../../components/text";
import styled from "styled-components";
import {Device, Disc, Screen, Standard} from "../../images/video-editing/icons";

const SpecsSectionStyled = styled.div`
  padding: 112px 20px;
  box-sizing: border-box;
  background-color: #32393E;

  .specs-section__title {
    color: #FFF;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 32px;
  }

  .specs-section__desc {
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 700px;
    text-align: center;
    margin-bottom: 48px;
  }
`

const SpecsSectionContainer = styled.div`
  max-width: 1740px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const SpecsSectionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 272px);
  gap: 56px;
`

const SpecsSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`

const SpecsSectionItemTitle = styled(Text)`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin: 32px 0 16px 0;
`

const SpecsSectionItemDesc = styled(Text)`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const SpecsSection = () => {
    return (
        <SpecsSectionStyled>
            <SpecsSectionContainer>
                <Text
                    as="h2"
                    className="specs-section__title"
                >
                    Share your story the way you like
                </Text>
                <Text className="specs-section__desc">
                    Save the ready video project onto your computer hard disk drive, upload it to modern gadgets, share
                    online on popular web hostings or replenish your video collection with a new DVD/Blu-ray disc.
                </Text>
                <SpecsSectionList>
                    <SpecsSectionItem>
                        <Standard/>
                        <SpecsSectionItemTitle as="h3">
                            Standard/HDV video file
                        </SpecsSectionItemTitle>
                        <SpecsSectionItemDesc>
                            MP4, AVI, DVD, MOV, MPEG, WMV, MKV, M2TS, etc.
                        </SpecsSectionItemDesc>
                    </SpecsSectionItem>
                    <SpecsSectionItem>
                        <Disc/>
                        <SpecsSectionItemTitle as="h3">
                            Save to Disc
                        </SpecsSectionItemTitle>
                        <SpecsSectionItemDesc>
                            Create a DVD-video or Blu-ray disc with a menu
                        </SpecsSectionItemDesc>
                    </SpecsSectionItem>
                    <SpecsSectionItem>
                        <Device/>
                        <SpecsSectionItemTitle as="h3">
                            Devices
                        </SpecsSectionItemTitle>
                        <SpecsSectionItemDesc>
                            Apple iPhone, iPad, Samsung, Sony PSP, BlackBerry
                        </SpecsSectionItemDesc>
                    </SpecsSectionItem>
                    <SpecsSectionItem>
                        <Screen/>
                        <SpecsSectionItemTitle as="h3">
                            Save for Web
                        </SpecsSectionItemTitle>
                        <SpecsSectionItemDesc>
                            Upload to YouTube, Facebook, Telly, Dropbox
                        </SpecsSectionItemDesc>
                    </SpecsSectionItem>
                </SpecsSectionList>
            </SpecsSectionContainer>
        </SpecsSectionStyled>
    )
}
