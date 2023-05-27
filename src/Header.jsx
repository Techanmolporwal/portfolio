import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='head-bord'>
            <h1 className='pot-name'>PORTFOLIO</h1>
            <nav>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">HIREME!</a>
                <div id="indicator"></div>
            </nav>
        </div>
    )
}

export default Header