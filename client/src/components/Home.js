import { useRef, useState } from 'react';
import Nav from './Nav'
import 'react-simple-carousel-image-slider/dist/index.css'
import React from 'react';
import './slider.css';
import './home.css'
import video from '../assets/video.mp4'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  unmuteButton: {
    position: 'absolute',
    bottom: '250px',
    left: '1300px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    console.log(isMuted)
  }

  return (
    <>
      <Nav/>
      <div className={classes.videoContainer}>
        <video
          className={classes.video}
          ref={videoRef}
          autoPlay
          muted
          loop
          onEnded={() => videoRef.current.play()}
        >
          <source src={video} type="video/mp4" />
        </video>
        <button onClick={toggleSound} className={classes.unmuteButton}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>

      <div className='text'>
        <h2>LET’S CREATE MAGICAL MOMENTS</h2>
        <span className='text-1'>It’s not just about</span><br></br><br></br>
        <span className='text-2'>Talent Management,</span>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <span className='text-3'>it’s about</span>
        <br></br><br></br><br></br><br></br>
        <span className='text-4'>Brand Management.</span>
        <br></br> <br></br><br></br>
        <div className='text-para'>
          <span>
          For over a decade we have stayed true to our roots. Refusing to be bought out, we are a dedicated and fully immersive entertainment boutique agency.
          </span>
        </div>
        <div className='text-para1'>
          <span>
Our hospitality background teaches us to serve first. Working at the forefront of some the greatest events and shows around the world for the last 25 years, we have created unforgettable moments, building dreams and bringing you the biggest stars on the planet to deliver your message. WATCH has built up a network of entertainment industry experts on speed dial. Personal and direct access to A-List talent allows us to respond faster, deliver bigger, ensuring your brand’s legacy is at the forefront of every piece of content, each live event and every campaign.
          </span>
        </div>
        <br></br>
        <div className='text-parah'>
          <span>We work today</span>
        </div>
        <div className='text-parah1'>
          <span>for tomorrow</span>
        </div>
      </div>
    </>
  );
};

export default Home;
