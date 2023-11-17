import React from "react";
import styled from "styled-components";
import {Standard, Device, Disc, Screen} from '../../images/video-editing/icons'

const specs = [
    {
        id: 1,
        title: "Standard/HDV video file",
        desc: "MP4, AVI, DVD, MOV, MPEG, WMV, MKV, M2TS, etc.",
        icon: <Standard/>
    },
    {
        id: 2,
        title: "Save to Disc",
        desc: "Apple iPhone, iPad, Samsung, Sony PSP, BlackBerry",
        icon: <Device/>
    },
    {
        id: 3,
        title: "Save to Disc",
        desc: "Create a DVD-video or Blu-ray disc with a menu",
        icon: <Disc/>
    },
    {
        id: 4,
        title: "Save for Web",
        desc: "Upload to YouTube, Facebook, Telly, Dropbox",
        icon: <Screen/>
    },
]

const SpecsSectionStyled = styled.section`
  padding: 112px 40px;
  background: radial-gradient(85.54% 178.24% at 50% 224.2%, #157BF2 0%, #32393E 100%);

  @media screen and (max-width: 800px) {
    padding-bottom: 80px;
  }

  @media screen and (max-width: 650px) {
    padding: 48px 0;
  }
`

const SpecsSectionContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  @media screen and (max-width: 400px) {
    align-items: stretch;
  }
`

const SpecsSectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  max-width: 700px;
  
  @media screen and (max-width: 650px) {
    margin: 0 16px;
  }
`

const SpecsSectionTitle = styled.h2`
  margin: 0;
  text-align: center;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const SpecsSectionDesc = styled.p`
  margin: 0;
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

const SpecsSectionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;

  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: repeat(4, 225px);
    overflow-x: auto;
    width: 100%;
  }
`

const SpecsSectionItem = styled.li`
  padding: 32px;
  border-radius: 6px;
  border: 1px solid var(--text-grey-m, #555);
  background: rgba(50, 57, 62, 0.50);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 650px) {
    padding: 16px;
    gap: 16px;
    &:first-child {
      margin-left: 28px;
    }

    &:last-child {
      margin-right: 28px;
    }
  }
`

const SpecsSectionItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (max-width: 650px) {
    gap: 8px;
  }
`

const SpecsSectionItemTitle = styled.h3`
  color: var(--bg-white, #FFF);
  text-align: center;
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`

const SpecsSectionItemDesc = styled.p`
  color: var(--bg-white, #FFF);
  text-align: center;
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const SpecsSectionLink = styled.a`
  color: #FFF;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  padding: 16px 32px;
  border-radius: 3px;
  background: #157BF2;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 650px) {
    margin: 0 16px;
    text-align: center;
  }
`

export const SpecsSection = ({t}) => {
    return (
        <SpecsSectionStyled>
            <SpecsSectionContainer>
                <SpecsSectionTitleWrapper>
                    <SpecsSectionTitle>{t("Share your story the way you like")}</SpecsSectionTitle>
                    <SpecsSectionDesc>
                        {t(`Save the ready video project onto your computer hard disk drive, upload it to modern gadgets, share online on popular web hostings or replenish your video collection with a new DVD/Blu-ray disc.`)}
                    </SpecsSectionDesc>
                </SpecsSectionTitleWrapper>
                <SpecsSectionList>
                    {
                        specs.map(spec => (
                            <SpecsSectionItem key={spec.id}>
                                {spec.icon}
                                <SpecsSectionItemBox>
                                    <SpecsSectionItemTitle>{t(spec.title)}</SpecsSectionItemTitle>
                                    <SpecsSectionItemDesc>{t(spec.desc)}</SpecsSectionItemDesc>
                                </SpecsSectionItemBox>
                            </SpecsSectionItem>
                        ))
                    }
                </SpecsSectionList>
                <SpecsSectionLink href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">{t("Try AVS Slideshow Maker")}</SpecsSectionLink>
            </SpecsSectionContainer>
        </SpecsSectionStyled>
    )
}
