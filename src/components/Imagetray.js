import React, { Component } from 'react';
import ImageContainer from './Imagecontainer'
import "./styles/imagetray.css"
export default class Imagetray extends Component {
     constructor(props) {
          super(props); 
          this.state = {
               loaded:false,
               Images: []
          }
     }
     componentDidMount() {
          let i = 1;
          const images = []
          for (i = 1; i <= 40; i++) {
               images.push(require(`../photos/${i}.jpg`))
          }
          this.setState({
               Images: images
          })
          this.setState({loaded:true})
     }
     render() {
          const images = this.state.Images;
          if(this.state.loaded)
          {
               return (
                    <div className="row" id="tray">
                         {images.map((Image, idx) => <ImageContainer key={idx} image={Image}/>)}
                    </div>
               )
          }
          else{
               return <div></div>
          }
          
     }
}