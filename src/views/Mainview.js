import React, {Component} from "react"
import About from "../components/About"
import Imagetray from '../components/Imagetray'

export default class Mainview extends Component
{
     render()
     {
          return(
               <div>
                    <div style={headStyle}>
                         <h1>Crazy Arts</h1>
                    </div>
                    <About />
                    <Imagetray />
               </div>
          )
     }
}

const headStyle ={
     fontFamily: "Viner Hand ITC",
     fontSize: '30px',
     color:'#ffffff',
     padding: '30px'
}