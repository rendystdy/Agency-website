import React from 'react';
import { Link } from 'react-router-dom';

const ClientItem = props => {
  return (
    <div className='col-md-3 col-sm-6'>
      <Link to='#'>
        <img
          className='img-fluid d-block mx-auto'
          src={props.image}
          alt=''
        />
      </Link>
    </div>
  );
};

export default ClientItem;
