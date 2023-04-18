import React from 'react';
import artist from '../images/artist.png';
import muscician1 from '../images/musician.png';
import scilptor from '../images/sculptor.png';
import casting from '../images/casting.png';
import dance from '../images/dance.png';

const Image=()=>{
    return(
        <div className="container">
                      <div className="row img-row-1">
                        <div className="col-lg-12">
                        <img alt="sculptor1711" src={scilptor} className='login-img'/>
                              <img alt="casting1713" src={casting} className='login-img'/>
                              <img alt="dance1815" src={dance} className='login-img'/>
                        </div>
                        <div className='row img-row-2'>
                        <div className="col-lg-12">
                        <img alt="artist177" src={artist} className='login-img' />
                        <img alt="musician179" src={muscician1} className='login-img'/>
                        </div>
                        </div>
                      </div>
        </div>
    )
}

export default Image;