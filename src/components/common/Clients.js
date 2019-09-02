import React from 'react';
import ClientItem from './ClientItem';
import image1 from '../../assets/img/logos/designmodo.jpg';
import image2 from '../../assets/img/logos/themeforest.jpg';
import image3 from '../../assets/img/logos/creative-market.jpg';
import image4 from '../../assets/img/logos/envato.jpg';

const clientItem = [
  { image: image1, to: '/' },
  { image: image2, to: '/' },
  { image: image3, to: '/' },
  { image: image4, to: '/' }
];

const Clients = () => {
  return (
    // <!-- Clients -->
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          {clientItem.map((item, index) => {
            return <ClientItem key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
