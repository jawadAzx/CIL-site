import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import { GiHamburgerMenu } from "react-icons/gi";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    // make navbar visible when scrolling down
    const listenToScroll = () => {
        let heightToHideFrom = 87;
        console.log(window.scrollY);
        if (window.scrollY > heightToHideFrom) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }
    console.log(isVisible)



    return (
        <div>
            <div className={isVisible ? "navbar" : "navbar-fixed"}>
                <div className="navbar-items">
                    <div className="navbar-item">
                        <a href="#">
                            <Typography variant="h6" color="#424242">
                                Home
                            </Typography>
                        </a>
                    </div>
                    <div className="navbar-item item-margin">
                        <a href="#">
                            <Typography variant="h6" color="#424242">
                                Shop
                            </Typography>
                        </a>
                    </div>
                    <div className="navbar-item item-margin">
                        <a href="#">
                            <Typography variant="h6" color="#424242">
                                About
                            </Typography>
                        </a>
                    </div>
                    <div className="navbar-item item-margin">
                        <a href="#">
                            <Typography variant="h6" color="#424242">
                                Contact
                            </Typography>
                        </a>
                    </div>
                    <div className="navbar-item item-margin">
                        <a href="#">
                            <Typography variant="h6" color="#424242">
                                Login
                            </Typography>
                        </a>
                    </div>
                </div>



            </div>
            <div className={isVisible ? "navbar-temp" : "navbar-fixed-bottom"}>
                <hr
                    className='navbar-divider'
                    style={{
                        border: '1px solid #e0e0e0',
                    }}

                />
            </div>
            <div className="navbar-sm">
                <h2>logo</h2>
                <div className='menu-icon'>
                    <MenuIcon
                        sx={{
                            fontSize: '3rem',
                        }}
                    />
                </div>
            </div>
        </div>


    )
}

export default Navbar