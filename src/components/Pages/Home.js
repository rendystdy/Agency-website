import React, { Component } from 'react';
import Header from '../common/Header';
import bgImage from '../../assets/img/header-bg.jpg'

// Re-usable components
import Services from '../common/Services';
import Portofolio from '../common/Portofolio';
import Contact from './Contact';
import Team from '../common/Team';
import Clients from '../common/Clients';
import TimeLine from '../common/TimeLine';

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title='Welcome To Our RS!'
          subTitle='ITS NICE TO MEET YOU'
          buttonText='Tell Me More'
          showButton={true}
          link='/services'
          bgImage={bgImage}
        />
        <Services />
        <Portofolio />
        <TimeLine />
        <Team />
        <Clients />
        <Contact />
      </div>
    );
  }
}

export default Home;
