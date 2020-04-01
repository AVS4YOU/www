import React from "react";
import styled from 'styled-components';

import Overview from '../../images/common/icons/overview.svg';
import Reviews from '../../images/common/icons/reviews.svg';
import Screentour from '../../images/common/icons/screentour.svg';
import Download from '../../images/common/icons/download.svg';
import AttentionIcon from '../../images/common/icons/red_ring.svg';

const StyledPageWrapper = styled.div`
  .headerBackground{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 0;
    position:relative;
  }

  .headerBackgroundImage{
    width: 100%;
    z-index: -1;
    height: 100%;
    top: 0;
  }

  .headerContentWrapper{
    padding-top: 120px;
    padding-bottom: 100px;
    max-width: 750px;
    margin: auto;
  }

  .headerText{
    padding-bottom: 35px;
    line-height:normal;
  }

  .topButton{
    margin-top: 30px;
  }

  .buttonWrapper{
    margin:auto;
    padding-top: 65px;
    display: table;
  }

  .headerImage{
    display:block;
    margin:auto;
    max-width: 100%;

    &.mobile{
      display:none;
    }
  }

  .scrollLinksWrapper{
    padding: 100px 0;
    display: grid;
    grid-template-columns: 128px 128px 128px 128px;
    grid-gap: 30px;
    margin: auto;
    width: max-content;
  }

  .backgroundWrapper{
    background-color: #FAF7F2;
    margin-top: 100px;
  }

  .carouselHeader{
      padding-top: 100px;
      font-weight:600;
      color:#000000;
      font-size:32px;
      text-align:center;
  }

  .scrollToButton{
    padding: 20px;
    padding-top: 85px;
    background-size: 42px;
    background-position: 50% 20px;
    background-repeat: no-repeat;
    cursor: pointer;
    border-radius: 5px;   
    box-shadow: 0px 3px 6px #ffffff;
    transition: 0.15s linear;

    &:hover{
      box-shadow: 0px 3px 6px #00000029;
    }

    &.overview{
      background-image: url(${Overview});
    }

    &.reviews{
      background-image: url(${Reviews});
    }

    &.screentour{
      background-image: url(${Screentour});
    }

    &.download{
      background-image: url(${Download});
    }
  }
  .downloadInfoWrapper{
    padding-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 15px;
    margin: auto;
    max-width: 600px;
  }

  .licenseText{
    padding-top: 25px;
    padding-bottom: 100px;

    a{
      color: #1296E6;
    }
  }

  .technicalSpecificationWrapper{
    background-color: #FAF7F2;
    padding: 100px 0;
  }

  .requirementsHeader{
    padding-bottom: 10px;
    border-bottom: 1px solid #D1D1D1;
    max-width: 404px;
    margin-bottom: 10px;
  }

  .specificationGrid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-top: 50px;
    padding-bottom: 10px;
  }

  .pcComponents{
    padding-right: 10px;
  }

  .systemWrapper{
    padding-bottom: 10px;
  }

  .attentionBlock{
    background: url(${AttentionIcon}) no-repeat;
    background-color: #ffffff;
    background-position: 20px 15px;
    padding: 16px;
    padding-left: 55px;
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    .scrollLinksWrapper{
      display:none;
    }

    .headerText{
      font-size: 48px;
      padding-bottom: 25px;
    }

    .headerDescription{
      font-size: 18px;
      font-weight: 300;
    }

    .headerContentWrapper{
      max-width: 540px;
    }
  }

  @media (max-width: 750px) {

    .headerContentWrapper{
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .headerImage{
      display:none;

      &.mobile{
        display: block;
        box-sizing: border-box;
        border-radius: 15px;
        margin: auto;
        padding: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    .buttonWrapper{
      padding-top: 50px;
    }

    .headerText{
      font-size: 34px;
    }

    .carouselHeader{
      font-size: 24px;
      padding-top: 50px;
    }

    .licenseText{
      padding-bottom: 50px;
    }

    .downloadInfoParam{
      font-size: 14px;
    }

    .downloadInfoText{
      font-size: 14px;
    }

    .headerSpecification{
      font-size: 24px;
    }

    .specificationGrid{
      grid-template-columns: 1fr;
    }

    .requirementsHeader{
      font-size: 16px;
    }

    .systemWrapper span{
      font-size: 14px;
    }

    .attentionBlock{
      display:none;
    }

    .systemInfo{
      font-size: 14px;
      font-style: italic;
    }

    .technicalSpecificationWrapper{
      padding: 50px 0;
    }
  }
`;

const ProductPagesWrapper = ({children }) => {
    return (
        <StyledPageWrapper>
              {children}
        </StyledPageWrapper>
    )
}

export default ProductPagesWrapper