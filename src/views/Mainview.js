import React, {Component} from "react"

export default class Mainview extends Component
{
     render()
     {
          return(
               <div>
                    <div style={headStyle}>
                         <h1>Crazy Arts</h1>
                    </div>
               </div>
          )
     }
}

const headStyle ={
     fontFamily: "Viner Hand ITC",
     fontSize: '24px',
     color:'#ffffff'
}