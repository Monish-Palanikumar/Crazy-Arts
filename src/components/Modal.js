import React, { Component } from 'react'
import "./styles/modal.css"
import modalFunctions from '../utilityFunctions/modalFunctions'

export default class Modal extends Component {
    render() {
        return (
            <div id="modal_" className="modal_">
                <div className="modal_content">
                    <span className="closeBtn" onClick={modalFunctions.closeModal}>&times;</span>
                    {/* <p>Hello</p> */}
                    <img id="modalImage" alt="images"/>
                </div>
                
            </div>
        )
    }
}
