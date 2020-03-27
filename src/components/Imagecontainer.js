import React, {Component} from 'react';
import Img from 'react-image'
import "./styles/imagecontainer.css"
import $ from 'jquery'
export default class ImageContainer extends Component{
     constructor(props)
     {
          super(props)
          this.state = {
               imgVisibility: false
          }
          this.setModalImage=this.setModalImage.bind(this)
     }
     setModalImage(image,id)
     {
          const _id = "#i" + id
          console.log(_id)
          $(_id).attr("src",image)
     }
     render()
     {
          return(
               <div>
                    <button type="button" style={{border:0,padding:0,background:"none"}} data-toggle="modal" data-target="#myModal">
                         <div className="col-xs-12 col-md-6 col-lg-3 mt-5">
                              <Img className="image" src={this.props.image} alt="images" onClick={this.setModalImage(this.props.image,this.props.uniqueId)}/>  
                         </div> 
                    </button>

                    <div id="myModal" className="modal fade" role="dialog">
                         <div className="modal-dialog">
                              <div className="modal-content">
                                   
                                   <div className="modal-body">
                                        <img id={"i"+this.props.uniqueId.toString()} className="image" src={this.props.image} alt="images" /> 
                                        <p>{this.props.uniqueId}</p>
                                   </div>
                                   <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                   </div>
                              </div>

                         </div>
                    </div>
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