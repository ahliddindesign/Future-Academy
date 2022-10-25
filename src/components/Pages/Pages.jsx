import React from 'react';
import plogo1 from './pages__img/Screenshot_3.png';

const Pages = () => {
    return (
        <>
            <div className="comtainer pcontainer">
                <h4 style={{ marginTop: '50px', }} className='text-center pactittle'>PACKAGES</h4>
                <h1 style={{ textTransform: 'capitalize', }} className='text-center ptittle'>Choose the package that's <span>right for you!</span></h1>
                <div style={{padding:'20px 190px'}} className="col-lg-12">
                    <img style={{ marginTop:'50px', width:'1000px',}} src={plogo1} alt="" />
                </div>
            </div>
        </>
    );
};


export default Pages;