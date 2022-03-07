import React from "react";
import './header.css';

const Header = ( {black} ) => {
    return(
        <header className={ black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Netflix.png" alt="NetFlix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Users_icon.svg/640px-Users_icon.svg.png" alt="USER"/>
                </a>
            </div>
        </header> 
    )
}

export default Header;