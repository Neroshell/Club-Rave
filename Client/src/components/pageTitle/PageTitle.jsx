import React from 'react';
import './PageTitle.css';
import bgImageone from '../../assets/club-house4.jpg'; 

function PageTitle(props) {
  return (
    <div className='page-title' style={{ backgroundImage: `url(${bgImageone})` }}>
        <div className='page-child'>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    </div>
  );
}

export default PageTitle;
