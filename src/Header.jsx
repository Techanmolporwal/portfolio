import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className='head-bord'>
            <h1 className='pot-name'>PORTFOLIO</h1>
            <nav>        
                <Link to='who-back'><div>HOME</div></Link>
                <Link to='abo-back'><div>ABOUT</div></Link>
                <Link to='con-back'><div>CONTECTME!</div></Link>
                <div id="indicator"></div>
            </nav>
        </div>
    )
}

export default Header