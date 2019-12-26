import React, {Component} from 'react';
import Img from 'react-image'

export default class ImageContainer extends Component{
     render()
     {
          return(
               <div className="col-xs-12 col-md-6 col-lg-3 mt-5">
                    <Img src={this.props.image} style={imgStyle} alt="images" />
               </div>

          )
     }
}

const imgStyle ={
     width:'300px',
     height:'250px',
     borderRadius:'50px',
     filter: 'grayscale(60%)'
}