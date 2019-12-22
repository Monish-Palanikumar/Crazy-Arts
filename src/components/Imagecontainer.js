import React, {Component} from 'react';
import Img from 'react-image'

export default class ImageContainer extends Component{
     constructor(props)
     {
          super(props)
          this.state={
               images:[require("../photos/1.jpg")]
          }
     }
     
     render()
     {

          return(
               <div>
                    <Img src={this.state.images[0]} style={imgStyle} alt="images" />
               </div>

          )
     }
}

// const Imgcontainer=
// {
//      boxShadow: "2px 0px 1px grey",
//      height: "200px",
//      borderStyle: "solid",
//      borderColor: "#6b6c50",
//      width: "290px",
//      color: "white",
//      borderRadius: "15px",
// };

const imgStyle ={
     width:'300px',
     height:'250px',
     borderRadius:'50px',
     padding:'20px',
     filter:'grayscale(75%)',
     transition: 'ls',

     //border:'1px grey dashed'
}