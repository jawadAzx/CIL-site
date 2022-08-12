import React from 'react'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const Home = () => {
  return (
    <div>
      <div className="home-upper-container">
        < div
          style={{
            backgroundImage:
              "url(" +
              require("../../assets/images/home-upper-img.jpg") + ")",

            backgroundSize: 'fit',
            backgroundPosition: 'center',
            height: '70.5vh',
            width: '100%',
            position: 'absolute',
            zIndex: '-1',
            top: '11.9rem',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',


          }}
        >
          <span className="home-left-container-1">


          </span>
          <Typography variant="h1" color="#000" style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            marginLeft: '5rem',
            marginTop: '10rem',
            marginBottom: '10rem',
            textAlign: 'left',
            position: 'absolute',
            zIndex: '1',
            opacity: '1'
          }}>
            27 years of excellence
          </Typography>
          <span className="home-left-container-2">

          </span>
          <button className="btn">
            <Typography variant="h6" color="#000" >
              Learn More
            </Typography>
          </button>

        </div>


      </div>

    </div>
  )
}

export default Home