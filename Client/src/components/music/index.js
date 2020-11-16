import React from "react";
import Music_page  from "../../images/black-friday-2020/ost/operation_casino.mp3";
import styled from 'styled-components';

import onMusicButtom from "../../images/black-friday-2020/ost/on_bf.svg";
import offMusicButtom from "../../images/black-friday-2020/ost/off_bf.svg";

const MusicStyle = styled.div`
padding-left: 590px;
`;

export default class Music extends React.Component {
    constructor(props) {
    super(props);
    this.handleOnMouseOverSound = this.handleOnMouseOverSound.bind(this);
    this.state = {
      autoplay: true,
      play: false,
      pause: true,
    }
    this.url = Music_page;
    this.audio = new Audio(this.url);
  }

  handleOnMouseOverSound(event){
    event.preventDefault();
    this.setState({hoveringTrim:true});
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    
  return (
    <MusicStyle>
    <div onMouseEnter={this.handleOnMouseOverSound}>
      {!this.state.pause ?
        <img onClick={this.pause} src={offMusicButtom} />
         : 
         <img onClick={this.play} src={onMusicButtom} /> 
    }
    </div>  
    </MusicStyle>
    );
  }
}
