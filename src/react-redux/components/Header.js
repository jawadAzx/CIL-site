import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Home from './Home';
const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    const listenToScroll = () => {
        let heightToHideFrom = 87;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible &&      // to limit setting state only the first time         
                setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    return (
        <div>
            {
                isVisible ?
                    <div>
                        <div className='header'>
                            <Typography variant='h3' color='inherit' className='header-text'>
                                Logo
                            </Typography>
                        </div>
                        <hr
                            className='navbar-temp'
                            style={{
                                border: '1px solid #d8d8d8',
                                // width: '100%',
                                margin: '0',
                                // no shadows
                                boxShadow: 'none'
                            }}
                        />
                    </div>

                    : null
            }

            <Navbar />

            <Home />
        </div>

    )
}

export default Header