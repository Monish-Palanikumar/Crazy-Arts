import React, { Component } from 'react'

export default class About extends Component
{
     render()
     {
          return(
               <div>
                    <div style={textStyle}>
                         Hey, this is Aravind Raj, Computer Science graduate and an inspirational photographer ! <br />
                         Scroll more to see my photographs
                    </div>
               </div>
          )
     }
}

const textStyle ={
     fontFamily:'Segoe Print',
     fontSize:'25px',
     color:'white'
}
