import React, { Component } from 'react';
import ImageContainer from './Imagecontainer'

export default class Imagetray extends Component {
     constructor(props) {
          super(props);
          const url = "../photos/1.jpg"
          this.state = {
               Visibility: false,
               Image: require("../photos/1.jpg"),
               Images: []
          }
     }
     componentWillMount() {
          let i = 1;
          const images = []
          for (i = 1; i <= 40; i++) {
               images.push(require(`../photos/${i}.jpg`))
          }
          this.setState({
               Images: images
          })
     }
     render() {
          const images = this.state.Images;
          return (
               <div className="row">
                    {images.map((Image, idx) => <ImageContainer key={idx} image={Image} />)}
               </div>
          )
     }
}