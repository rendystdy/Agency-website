import React from 'react';
import img1 from '../../assets/img/team/1.jpg';
import img2 from '../../assets/img/team/2.jpg';
import img3 from '../../assets/img/team/3.jpg';
import TeamMember from './TeamMember';

const teamMember = [
  {
    image: img1,
    name: 'Kay Garland',
    positon: 'Lead Designer',
    icon: ['fa-twitter', 'fa-facebook', 'fa-linkedin-in']
  },
  {
    image: img2,
    name: 'Larry Parker',
    positon: 'Lead Marketer',
    icon: ['fa-twitter', 'fa-facebook', 'fa-linkedin-in']
  },
  {
    image: img3,
    name: 'Diana Pertersen',
    positon: 'Lead Developer',
    icon: ['fa-twitter', 'fa-facebook', 'fa-linkedin-in']
  }
];

const Team = () => {
  return (
    // <!-- Team -->
    <section className='bg-light page-section' id='team'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h2 className='section-heading text-uppercase'>OUR AMAZING TEAM</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur
            </h3>
          </div>
        </div>
        <div className='row'>
          {teamMember.map((item, index) => {
            return <TeamMember key={index} {...item} />;
          })}
        </div>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <p className='large text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
