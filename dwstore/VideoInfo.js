import React, { Component } from 'react';

import { Layout, Button } from 'element-react';
import { Player } from 'video-react';
import { createForm } from 'rc-form';
import "../../node_modules/video-react/dist/video-react.css"; 

import './StoreProduct.css';

class VideoInfo extends Component {

  constructor(props) {
        super(props)
        this.state = { 
           title:'Hello',
           img_url:'http://122.51.161.53:8080/img/photo3.jpg',
           img_video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        }
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
  }


  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  handleClickSubmit(){
     let val=this.refs.input_video.value;
     console.log(val);
     this.setState({img_video: val })
  }

  render() {
    const const_player_url = this.state.img_url;
    const const_player_video = this.state.img_video;

    return (
   <div>
   <Layout.Row>
      <Layout.Col span={ 6 } offset={ 0 }>
          <input ref='input_video'  />
      </Layout.Col>
      <Layout.Col span={ 2 } offset={ 0 }>
          <Button type="primary" onClick={()=>this.handleClickSubmit()} icon="edit">播放</Button>
      </Layout.Col>
   </Layout.Row>
   <Layout.Row>
      <Layout.Col span={ 8 } offset={ 0 }>
            <Player
                ref={player => {this.player = player;}} 
                playsInline
                poster={const_player_url}
                src={const_player_video}
                preload={'auto'}
            />
      </Layout.Col>
   </Layout.Row>
   </div>
    );
  }

}
const VideoInfoWrapper = createForm()(VideoInfo);
export default VideoInfoWrapper;

