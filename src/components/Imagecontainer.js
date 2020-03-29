import React, { Component } from 'react';
import Img from 'react-image'
import Modal from "./Modal"
import "./styles/imagecontainer.css"
import modalFunctions from "../utilityFunctions/modalFunctions"
export default class ImageContainer extends Component {
     constructor(props) {
          super(props)
          this.state = {
               imgVisibility: false
          }
     }
     render() {
          return (
               <div>
                    <Modal image={this.props.image}/>
                    <button type="button" onClick={()=>{modalFunctions.openModal(this.props.image)}}>
                         <div className="col-xs-12 col-md-6 col-lg-3 mt-5">
                              <Img className="image" src={this.props.image} alt="images"/>
                         </div>
                    </button>  
               </div>


          )
     }
}

// const imgStyle ={
//      width:'300px',
//      height:'250px',
//      borderRadius:'50px',
//      filter: 'grayscale(60%)',
//      cursor:"pointer"
// }