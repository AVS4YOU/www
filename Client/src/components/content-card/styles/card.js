import styled, {css} from 'styled-components';

const remy = px => `${px / 18}rem`
const getWidth = (value) => {
  if (!value) return

  let width = value / 15 * 100
  return `width: ${width}%;`
}
const getFlex = (value) => {
  if (!value) return

  let flex = value / 12 * 100
  return `flex: 5 5 ${flex}%;`
}

export const GridContainer = styled.div`
padding-bottom: ${remy(15)};
padding-top: ${remy(15)};
padding-right: ${remy(15)};
padding-left: ${remy(15)};
margin-right: auto;
margin-left: auto;
margin-top: 40px;
margin-bottom: 60px;
width: 75%;
text-align: left;
.headerDescription{
padding-top:30px;
padding-bottom:20px;
font-family: 'Open Sans',sans-serif,Arial;
}
@media (min-width: 576px) {
  max-width: ${remy(650)};
}

@media (min-width: 768px) {
  max-width: ${remy(880)};
}

@media (min-width: 992px) {
  max-width: ${remy(1050)};
}
@media (min-width: 1080px) {
  width: 100%;
}
@media (min-width: 1200px) {
  max-width: ${remy(1200)};
}
@media (min-width: 1440px){
  max-width: 1181px;
}
`

export const GridRow = styled.div`
margin-right: ${remy(-15)};
margin-left: ${remy(-15)};
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const GridColumn = styled.div`
padding-right: ${remy(15)};
padding-left: ${remy(15)};

${({ xs }) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

@media (min-width: 576px) {
  ${({ sm }) => sm && getFlex(sm)};
  ${({ sm }) => sm && getWidth(sm)};
}

@media (min-width: 768px) {
  ${({ md }) => md && getFlex(md)};
  ${({ md }) => md && getWidth(md)};
}

@media (min-width: 992px) {
  ${({ lg }) => lg && getFlex(lg)};
  ${({ lg }) => lg && getWidth(lg)};
}

@media (min-width: 1200px) {
  ${({ xl }) => xl && getFlex(xl)};
  ${({ xl }) => xl && getWidth(xl)};
}

@media (min-width: 1280px) {
  max-width: 260px;
  max-height: 410px;
}

@media (min-width: 1920px) {
  max-width: 260px;
  max-height: 430px;
}
`

export const Card = styled.article`
height: auto;
overflow: hidden;
word-wrap: break-word;
position: relative;
width: 90%;
text-align: left;
min-height: ${remy(460)};
cursor: pointer;
perspective: 1000px;
transition: all .25s ease-in-out;
margin:2px;
border: 1px solid #E2E2E2;
font-family:'Open Sans',sans-serif,Arial;
&:focus,
&:hover {
  box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
}

@media (max-width: 1280px){
  min-height: ${remy(510)};
}

@media (max-width: 1180px){
  min-height: ${remy(585)};
}

`

export const CardSide = css`
position: absolute;
text-align: left;
top: 25px;
left: 25px;
right:15px;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
height: 15%;
backface-visibility: hidden;
transition: all .25s ease-in-out;
`

export const CardImage = styled.div`
background-repeat: no-repeat;
background-size: inherit;
${CardSide};
`

export const CardFront = styled.div`
  background-repeat: no-repeat;
  position:cover;
  overflow: hidden;
  word-wrap: break-word;
`

export const CardNumber = styled.span`
word-wrap: break-word;
font-size: 18px;
`

export const CardTitle = styled.div`
  padding-top:95px;
  padding-left: 25px;
  width: 85%;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: 700;
  font-family:'Open Sans',sans-serif,Arial;
  opera:-o-prefocus {
    width: 80%;
  }
  @media (min-width: 1440px) {
    width: 80%;
  }
  @media (min-width: 1920px) {
    width: 80%;
  }
  @media not all and (-webkit-min-device-pixel-ratio:1)
  {  
    width: 80%;
  }
 
`

export const CardDescription = styled.div`
padding-top:15px;
padding-left: 25px;
padding-bottom:10px;
width: 76%;
word-wrap: break-word;
font-size: 14px;
line-height: 24px;
@media (min-width: 1920px) {
  width: 80%;
}
`

export const CardCenter = styled.article`
height: auto;
overflow: hidden;
word-wrap: break-word;
position: relative;
width: 90%;
text-align: center;
min-height: ${remy(425)};
cursor: pointer;
perspective: 1000px;
transition: all .25s ease-in-out;
margin:2px;
border: 1px solid #E2E2E2;
font-family:'Open Sans',sans-serif,Arial;
&:focus,
&:hover {
  box-shadow: 0 0 ${remy(40)} rgba(0,0,0,.15);
}
@media (max-width: 1200px){
  min-height: ${remy(515)};
}
@media (min-width: 1280px) {
  min-height: ${remy(460)};
}
@media (min-width: 1920px) {
  min-height: ${remy(430)};
}
`

export const CenterCardSide = css`
  position: absolute;
  text-align: center;
  top: 25px;
  left: 15px;
  right:15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
`

export const CardImageCenter = styled.div`
 background-repeat: no-repeat;
 background-size: inherit;
 background-position: bottom;
  ${CenterCardSide};
`

export const CardTitleCenter = styled.div`
    padding-top:110px;
    padding-left: 15px;
    width: 84%;
    word-wrap: break-word;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const CardDescriptionCenter = styled.div`
  text-align: center;
  padding-top:20px;
  padding-left: 15px;
  width: 85%;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 26px;
`