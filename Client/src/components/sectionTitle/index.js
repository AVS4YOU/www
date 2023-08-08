import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: ${({maxWidth}) => maxWidth};
  margin: 0 auto;
  color: #fff;
  
  @media screen and (max-width: 1200px) {
    gap: 24px;
  }
`

const SectionTitleComponent = styled.h2`
  margin: 0;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  
  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
`

const SectionTitleDesc = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`

export const SectionTitle = (props) => {
    const {
        title,
        color,
        desc,
        maxWidth = '700px',
        className,
    } = props;
    return (
        <SectionTitleStyled maxWidth={maxWidth} className={className} style={{color}}>
            <SectionTitleComponent>{title}</SectionTitleComponent>
            {
                desc !== undefined && <SectionTitleDesc>{desc}</SectionTitleDesc>
            }
        </SectionTitleStyled>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    desc: PropTypes.string,
    maxWidth: PropTypes.string,
    className: PropTypes.string,
}
