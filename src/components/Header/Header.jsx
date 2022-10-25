import React from 'react';
import logo1 from './header__img/Deltify. (1).svg';
import logo2 from './header__img/surface1 (1).svg';

const Header = () => {

    return (
        <>
            <div className="container homecontainer">
                <nav class="navbar ">
                    <div class="container-fluid">

                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#"><img src={logo1} alt="" /></a>
                        </div>


                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-left">
                                <li><a style={{ marginLeft: '20px', }} href="#">HOME</a></li>
                                <li><a href="#">ABOUT</a></li>
                                <li><a href="#">PAGES</a></li>
                                <li><a href="#">SERVICES</a></li>
                                <li><a href="#">PORTFOLIO</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">CONTACT</a></li>


                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">SAY HI</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row hed-row">
                    <div className="col-lg-6 hedr-lg-6__1">
                        <h1>Let’s sky <span>rocket</span> your <span>revenue</span></h1>
                        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span> Ut enim ad minim veniam</span> Lorem ipsum dolor sit amet.</p>
                     <div className="row">
                           
                     <div className="col-lg-4 hedr-lg-4__1">
                            <p> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                            <p> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                            <p> <i className='glyphicon glyphicon-ok'></i>   Lorem Ipusum</p>
                        </div>
                        <div className="col-lg-4 hedr-lg-4__1">
                            <p> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                            <p> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                            <p> <i className='glyphicon glyphicon-ok'></i>    Lorem Ipusum</p>
                        </div>
                        <div className="col-lg-4">
                            
                        </div>
                     </div>

                        <button  style={{padding:'14px 60px',color:'#fff', fontSize:'16px', letterSpacing:'1.5px', marginTop:'30px', borderRadius:'170px',}} className='btn-row__lg' >Get Started</button>

                    </div>
                    <div className="col-lg-6">
                        <img style={{width:'500px',}} src={logo2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;