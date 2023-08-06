import React, { useEffect } from 'react';
import CircleType from 'circletype'
//import CityLivin from '../images/CityLivin.png'
import './pages.scss'

//@ts-check

const LandingPage = () => {

    useEffect(() => {
      const circleTypeTitle = new CircleType(document.getElementById('title'))
      circleTypeTitle.radius(600)
      const circleTypeSubTitle = new CircleType(document.getElementById('subtitle'))
      circleTypeSubTitle.radius(600)
    }, [])

  return (
    <div className={'landing-bkgd full-height'}>
      <h1 id='title' className={'welcome-notice centered'}>King Shan Royal Family</h1>
      <h3 id='subtitle' className={'welcome-notice-slogan centered'}>Consult the Navigation Bar for family tree public records.</h3>
      <div className={'full-width landing-padding relative'}><iframe src="https://giphy.com/embed/Ae8pGJZfQmCWc7BbPr" width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default LandingPage;