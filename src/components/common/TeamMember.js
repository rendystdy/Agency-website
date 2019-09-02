import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = props => {
  return (
    <div className='col-sm-4'>
      <div className='team-member'>
        <img className='mx-auto rounded-circle' src={props.image} alt='' />
        <h4>{props.name}</h4>
        <p className='text-muted'>{props.position}</p>
        <ul className='list-inline social-buttons'>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className={`fab ${props.icon[0]}`}></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className={`fab ${props.icon[1]}`}></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className={`fab ${props.icon[2]}`}></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
