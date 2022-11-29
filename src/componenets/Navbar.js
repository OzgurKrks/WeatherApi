import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    
    return (
        <div>
            <div className='navbar'>
                <h2>Weather App</h2>
            </div>
           <div className='section'>
            <Link style={{"textDecoration":"none"}} to="/"><button  id="list">Liste</button></Link>
            <Link style={{"textDecoration":"none"}} to="/map"><button id='list'>Harita</button></Link>
           </div>

        </div>
    )
}

export default Navbar