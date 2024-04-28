import React, { useEffect } from 'react';
import vdo from './vd.mp4'

function HomeBanner() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newSize = 25 + scrollTop * 0.1;
        document.getElementById('object1').style.background = `radial-gradient(circle, rgb(38 93 172 / 28%) ${newSize}%, rgba(1, 1, 1, 0.6797093837535014) ${-newSize}%)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-banner">
      <div className="l-section-video">
      <video autoPlay loop muted playsInline  width="100%"  >
      <source 
      type="video/mp4" 
      src={vdo} />
      </video>
      </div>
      <div id="object1" className="l-section-overlay"></div>
    </div>
  );
}

export default HomeBanner;