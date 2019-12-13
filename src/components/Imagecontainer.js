import React, {Component} from 'react';

export default class ImageContainer extends Component{
     render()
     {
          return(
               <div style={Imgcontainer}>
                    hello
               </div>
          )
     }
}

const Imgcontainer=
{
     boxShadow: "2px 0px 4px white",
     height: "200px",
     borderStyle: "solid",
     borderColor: "#6b6d70",
     width: "290px",
     backgroundColor: "#2d425e",
     color: "white",
     borderRadius: "15px",
};