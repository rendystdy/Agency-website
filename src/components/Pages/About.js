import React, { Component } from 'react';
import Header from '../common/Header';
import aboutImg from '../../assets/img/about-2.jpg'
import TimeLine from '../common/TimeLine';
import Team from '../common/Team';

class About extends Component {
  render() {
    return (
      <div>
        <Header
          title='About Us'
          subTitle="It's really a great story"
          showButton={false}
          bgImage={aboutImg}
        />
        <TimeLine />
        <Team />
      </div>
    );
  }
}

export default About;
