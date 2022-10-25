import React from 'react';
import alogo1 from './about__img/Group 1000000690.jpg';
import alogo2 from './about__img/Group 1000000691.jpg';
import alogo3 from './about__img/Banner (2)reer 1.svg';


const About = () => {
    return (
        <>
            <div className="container">
                <div style={{padding:'100px  50px',}} className="row">
                    
                <div className="col-lg-3">
                        <img style={{borderRadius:'10px',}} src={alogo1} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img style={{borderRadius:'10px',}} src={alogo2} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img style={{borderRadius:'10px',}} src={alogo2} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img style={{borderRadius:'10px',}} src={alogo2} alt="" />
                    </div>
                </div>
                <div className="row hed-row">
                    <div className="col-lg-6">
                        <img style={{width:'550px',}} src={alogo3} alt="" />
                    </div>
                    <div style={{padding:'10px 20px'}} className="col-lg-6 hedr-lg-6__1">
                        <h4 style={{ fontFamily: 'Nunito Sans, sans-serif', color:'#EEBD23',}}>   EXPERT STORE DESIGNING</h4>
                        <h1 style={{color:'#404041',}}> <span>Shopify </span> stores that are  </h1>
                        <h1 style={{color:'#404041',}}>proven in its <span>power</span> to convert</h1>
                        <div className="col-lg-10">
                        <p style={{color:'#979797',}}>There are enough stresses involved in running a successful ecommerce site - the design and efficacy of your store shouldn't be one of them</p>
                        </div>

                     <div className="row">
                           
                     <div className="col-lg-4 hedr-lg-4__1">
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                        </div>
                        <div className="col-lg-4 hedr-lg-4__1">
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                            <p style={{color:'#979797',}}> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                        </div>
                        <div className="col-lg-4">
                            
                        </div>
                     </div>
                     <button style={{padding:'13px 35px', borderRadius:'3px', border:'none', background: '#F79E0E ',}}>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
