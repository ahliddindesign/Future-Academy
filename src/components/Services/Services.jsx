import React from 'react';
import slogo1 from './services__img/Group 37178.svg';

const Services = () => {
    return (
        <>
            <div className="container">
              <div style={{padding:'70px 30px',}} className="row">
              <div className="col-lg-6">
                <h4 className='text-left'>More we offer!</h4>
                <h1 className='text-left'>Engaging video ads which </h1>
                <h1 className='text-left'>will explode your sales</h1>
                <p>We offers whitening in a professional Solid Brush for fast, safe, and effective results after 10 days.</p>
                <h1 style={{display:'inline', marginRight:"30px",}} className='text-left'> <i className='glyphicon glyphicon-euro'></i> 65.00  EUR </h1>
                <del><i className='glyphicon glyphicon-euro'></i> 120.00  EUR </del>
                  
                </div>
                <div className="col-lg-6">
                    <img style={{width:'550px',}} src={slogo1} alt="" />
                </div>
              </div>
            </div>
        </>
    );
};


export default Services;