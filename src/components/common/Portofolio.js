import React, { Component } from 'react';
import PortofolioItem from './PortofolioItem';
import thumbnailOne from '../../assets/img/portfolio/01-thumbnail.jpg';
import thumbnailTwo from '../../assets/img/portfolio/02-thumbnail.jpg';
import thumbnailThree from '../../assets/img/portfolio/03-thumbnail.jpg';
import thumbnailFour from '../../assets/img/portfolio/04-thumbnail.jpg';
import thumbnailFive from '../../assets/img/portfolio/05-thumbnail.jpg';
import thumbnailSix from '../../assets/img/portfolio/06-thumbnail.jpg';

const portofolio = [
  { title: 'Threads', subtitle: 'Illustration', thumbnail: thumbnailOne },
  { title: 'Explore', subtitle: 'Graphic Design', thumbnail: thumbnailTwo },
  { title: 'Finish', subtitle: 'Identity', thumbnail: thumbnailThree },
  { title: 'Lines', subtitle: 'Branding', thumbnail: thumbnailFour },
  { title: 'Southwest', subtitle: 'Website Design', thumbnail: thumbnailFive },
  { title: 'Window', subtitle: 'Photography', thumbnail: thumbnailSix }
];

class Portofolio extends Component {
  render() {
    return (
      // <!-- Portfolio Grid -->
      <section className='bg-light page-section' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            {portofolio.map((item, index) => {
              return <PortofolioItem key={index} {...item} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portofolio;
