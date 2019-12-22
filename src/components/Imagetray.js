import React,{Component} from 'react';
import ImageContainer from './Imagecontainer'

export default class Imagetray extends Component{
     componentDidMount()
     {
          let i = 1;
          for (i = 1; i <= 40; i++) {
               const url = "../photos/1.jpg";
               this.setState(previousState => ({Images:[...previousState.Images,url]}))
          }
     }
     constructor(props)
     {
          super(props);
          const url="../photos/1.jpg"
          this.state = {
               Visibility: false,
               Image: require("../photos/1.jpg"),
               Images: []
          }
     }
     render()
     {
          const images=this.state.Images;
          
          
          return(
               <div style={{padding:'50px'}}>
                    <ImageContainer image={this.state.Image}/>
                    {/* {images.map(Image =>(<ImageContainer image={Image} />))}} */}
               </div>
          )
     }
}