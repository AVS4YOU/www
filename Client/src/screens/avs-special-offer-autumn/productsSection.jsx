import React, {useEffect, useState} from "react";
import styled from "styled-components";

import Link from '../../components/link';

import product1 from '../../images/avs-special-offer/video-editor-special-offer.png'
import product2 from '../../images/avs-special-offer/audio-editor-special-offer.png'
import product3 from '../../images/avs-special-offer/video-converter-special-offer.png'
import product4 from '../../images/avs-special-offer/audio-converter-special-offer.png'
import product5 from '../../images/avs-special-offer/remaker-special-offer.png'
import products from '../../images/avs-special-offer-autumn/products-full.png'

import leaf3 from "../../images/avs-special-offer-autumn/leaf3.png";
import leaf4 from "../../images/avs-special-offer-autumn/leaf4.png";
import leaf5 from "../../images/avs-special-offer-autumn/leaf5.png";
import leaf6 from "../../images/avs-special-offer-autumn/leaf6.png";
import leaf7 from "../../images/avs-special-offer-autumn/leaf7.png";
import leaf8 from "../../images/avs-special-offer-autumn/leaf8.png";
import leaf9 from "../../images/avs-special-offer-autumn/leaf9.png";
import leaf10 from "../../images/avs-special-offer-autumn/leaf10.png";

const list = [
    {
        img: product1,
        title: 'AVS Video Editor',
        desc: 'Powerful video editing program for Windows with basic and pro editing tools',
        list: [
            'Make stunning videos with music and effects',
            'Record video or capture screen',
            'Turn your photos into vivid slideshows',
            'Enhance the quality of your video',
            'Create engaging video projects, tutorials and demos'
        ],
        href: "https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
    },
    {
        img: product2,
        title: 'AVS Audio Editor',
        desc: 'Professional level audio editing and recording software',
        list: [
            'Record audio from microphone, Line In, Vinyl records',
            'Create an amazing audio mix',
            'Improve your sound quality',
            'Remove noise, apply 20+ special effects and filters',
            'Multitrack audio editing'
        ],
        href: "https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
    },
    {
        img: product3,
        title: 'AVS Video Converter',
        desc: 'All-in-one video converter with basic editing features',
        list: [
            'Convert and compress all key video formats',
            'Use ready conversion presets for modern gadgets',
            'Cut, trim, merge video files together',
            'Export audio from video in MP3/WAV',
            'Adjust aspect ratio, apply effects'
        ],
        href: "https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
    },
    {
        img: product4,
        title: 'AVS Audio Converter',
        desc: 'Feature-rich audio conversion program for Windows',
        list: [
            'Convert audio files to MP3, WAV, WMA, M4A, FLAC, OGG, etc',
            'Grab audio from CD disks to store soundtracks on your PC',
            'Edit audio tags to update metadata and enable tracks grouping',
            'Create your own audiobooks',
            'Make customized ringtones for iPhone'
        ],
        href: "https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
    },
    {
        img: product5,
        title: 'AVS Video ReMaker',
        desc: 'A fast video editor to make edits without changing the original video file format',
        list: [
            'Cut and delete unnecessary parts',
            'Change scene sequence in all popular video formats',
            'Transfer video from camcorders and video cameras to hard drive',
            'Create home video DVDs or Blu-ray discs',
        ],
        href: "https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
    },
]

const ProductsLeaf = styled.img`
  position: absolute;

  &.leaf10 {
    top: 375px;
    right: calc(50% + 560px);
  }

  &.leaf3 {
    top: 1174px;
    right: calc(50% - 870px);
  }

  &.leaf9 {
    top: 1446px;
    right: calc(50% + 620px);
  }
  
  &.leaf10-reverted {
    top: 1808px;
    right: calc(50% - 930px);
    transform: rotateY(180deg);
  }

  &.leaf3-reverted {
    top: 2610px;
    right: calc(50% + 680px);
    transform: rotateY(180deg);
  }
  
  &.leaf9-reverted {
    top: 3180px;
    right: calc(50% - 930px);
    transform: rotateY(180deg);
  }

  &.leaf10-copy {
    top: 3860px;
    right: calc(50% + 580px);
  }

  &.leaf3-copy {
    top: 3820px;
    right: calc(50% - 950px);
  }

  @media screen and (max-width: 1850px) {
    &.leaf10 {
      right: auto;
      left: 40px;
    }

    &.leaf3 {
      top: 1100px;
      right: 30px;
    }

    &.leaf9 {
      top: 1400px;
      right: auto;
      left: 20px;
    }

    &.leaf10-reverted {
      top: 1780px;
      right: 30px;
    }

    &.leaf3-reverted {
      top: 2590px;
      right: auto;
      left: 30px;
    }

    &.leaf9-reverted {
      top: 3150px;
      right: 30px;
    }
    
    &.leaf10-copy {
      top: auto;
      bottom: 650px;
      right: auto;
      left: 30px;
    }
    
    &.leaf3-copy {
      top: auto;
      bottom: 720px;
      right: 20px;
    }
  }
`

const ProductsStyled = styled.section`
  padding: 112px 0 198px;
  position: relative;

  * {
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
  }
  
  .leaf {
    transform: translateY(${({shift}) => shift + 'px'});
  }
`

const ProductsContainer = styled.div`
  padding: 0 120px;
  max-width: 1800px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 198px;
`

const ProductsHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ProductsHeadingTitle = styled.h2`
  background: var(--1, linear-gradient(180deg, #EA1313 0%, #AF0B0E 65.1%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`

const ProductsHeadingDescWrapper = styled.span`
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  p {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const ProductsHeadingDesc1 = styled.p`
  color: #32393E;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`

const ProductsHeadingDesc2 = styled.p`
  background: var(--1, linear-gradient(180deg, #EA1313 0%, #AF0B0E 65.1%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-decoration: line-through;
  position: relative;
  margin-left: 8px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--1, linear-gradient(180deg, #EA1313 0%, #AF0B0E 65.1%)); /* или другой цвет, который вы хотите использовать для перечеркивания */
    top: 50%;
    transform: translateY(-50%);
  }
`

const ProductsHeadingDesc3 = styled.p`
  background: var(--1, linear-gradient(180deg, #EA1313 0%, #AF0B0E 65.1%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  position: relative;
  margin-right: 8px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--1, linear-gradient(180deg, #EA1313 0%, #AF0B0E 65.1%)); /* или другой цвет, который вы хотите использовать для перечеркивания */
    top: 50%;
    transform: translateY(-50%);
  }
`

const ProductsHeadingDesc4 = styled.p`
  color: #32393E;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`

const ProductsHeadingAbout = styled.p`
  color: #32393E;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  
  max-width: 1282px;
  margin: 0 auto;
`

const ProductsHeadingButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-top: 32px;
  
  .buy-now {
    text-decoration: none;
    border-radius: 5px;
    background: #A8240F;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
    padding: 10px 72px;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px; /* 190% */
    text-transform: uppercase;

    &:hover {
      text-decoration: none;
    }
  }
`

const ProductsHeadingButton1 = styled.a`
  border-radius: 5px;
  background: #32393E;
  padding: 10px 32px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 190% */
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  
  &:hover {
    text-decoration: none;
  }
`


const ProductsImg = styled.img`
    
`

const ProductsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 198px;
`

const ProductsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 76px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`

const ProductsItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  
  min-width: 420px;
`

const ProductsItemTitle = styled.h3`
  margin: 0;
  color: #333;
  font-family: Montserrat, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`

const ProductsItemDesc = styled.p`
  margin: 0;
  font-family: Montserrat, sans-serif;
  color: #444;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`

const ProductsItemList = styled.ul`
  margin: 0;
  padding: 0 0 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ProductsItemListItem = styled.li`
  color: #555;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: Montserrat, sans-serif;
  width: inherit;


  &:before {
    content: '';
    width: 8px;
    height: 8px;
    display: block;
    background-color: #A8240F;
    border-radius: 50%;
    flex-shrink: 0;
  }
`

const ProductsItemLink = styled.a`
  text-decoration: none;
  border-radius: 5px;
  background: #32393E;
  padding: 12px 44px;

  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px; /* 211.111% */
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;

  &:hover {
    text-decoration: none;
  }
`

const ProductsItemImg = styled.img`
  flex-grow: 1;
  width: 100%;
  min-width: 100px;
  max-width: 767px;
`

export const ProductsSection = () => {
    const [shift, setShift] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setShift(+(window.scrollY / 100).toPrecision(3))
        })
    }, [])
    return (
        <ProductsStyled shift={shift}>
            <ProductsContainer>
                <ProductsHeading>
                    <ProductsHeadingTitle>AVS4YOU Full Pack</ProductsHeadingTitle>
                    <ProductsHeadingDescWrapper>
                        <ProductsHeadingDesc1>
                            Get 70% OFF on AVS4YOU Full Pack
                        </ProductsHeadingDesc1>
                        <ProductsHeadingDesc2>$</ProductsHeadingDesc2>
                        <ProductsHeadingDesc3>279</ProductsHeadingDesc3>
                        <ProductsHeadingDesc4>$79</ProductsHeadingDesc4>
                    </ProductsHeadingDescWrapper>
                    <ProductsHeadingAbout>
                        A complete set of programs for working with video files, slideshows and soundtracks. Manage your
                        video/audio collections, improve their quality and create stunning video projects!
                    </ProductsHeadingAbout>
                    <ProductsHeadingButtonsWrapper>
                        <ProductsHeadingButton1 href="https://downloads.avs4you.com/distributives/AVSInstallPack.exe">Download now</ProductsHeadingButton1>
                        <Link className="buy-now" id="buy-now2_special-offer-autumn" to="/register.aspx">
                            Buy NOW
                        </Link>
                    </ProductsHeadingButtonsWrapper>
                </ProductsHeading>
                <ProductsImg src={products} />
                <ProductsList>
                    {
                        list.map(item => (
                            <ProductsItem key={item.title}>
                                <ProductsItemImg src={item.img}/>
                                <ProductsItemBox>
                                    <ProductsItemTitle>{item.title}</ProductsItemTitle>
                                    <ProductsItemDesc>{item.desc}</ProductsItemDesc>
                                    <ProductsItemList>
                                        {
                                            item.list.map(name => <ProductsItemListItem>{name}</ProductsItemListItem>)
                                        }
                                    </ProductsItemList>
                                    <ProductsItemLink href={item.href}>Download now</ProductsItemLink>
                                </ProductsItemBox>
                            </ProductsItem>
                        ))
                    }
                </ProductsList>
            </ProductsContainer>
            <ProductsLeaf className="leaf10 leaf" src={leaf10} />
            <ProductsLeaf className="leaf3 leaf" src={leaf3} />
            <ProductsLeaf className="leaf9 leaf" src={leaf9} />
            <ProductsLeaf className="leaf10-reverted leaf" src={leaf10} />
            <ProductsLeaf className="leaf3-reverted leaf" src={leaf3} />
            <ProductsLeaf className="leaf9-reverted leaf" src={leaf9} />
            <ProductsLeaf className="leaf10-copy leaf" src={leaf10} />
            <ProductsLeaf className="leaf3-copy leaf" src={leaf3} />
        </ProductsStyled>
    )
}
