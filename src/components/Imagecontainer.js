import React, {Component} from 'react';
import Photo1 from '../photos/1.jpg'

export default class ImageContainer extends Component{
     render()
     {
          const imageClick = () => {
               console.log("hello")
          }
          return(
               <div>
                    <div style={Imgcontainer}>
                         <img style={imgStyle} src={Photo1} alt="1.jpg" onClick={() => imageClick()} />
                    </div>
                    
                    
                    <br /><br /><br />
                    <div style={Imgcontainer}>
                         hello
                    </div>
                    <br /><br /><br />
                    <div style={Imgcontainer}>
                         hello
                    </div>
               </div>
               
          )
     }
}

const Imgcontainer=
{
     boxShadow: "2px 0px 1px grey",
     height: "200px",
     borderStyle: "solid",
     borderColor: "#6b6c50",
     width: "290px",
     color: "white",
     borderRadius: "15px",
};

const imgStyle ={

     width:'100px',
     height:'100px'

}