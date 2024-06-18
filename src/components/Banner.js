import React from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';

export default function Banner() {
  return (
    <div>
        <div><img src={banner1} alt='banner1' /></div>
        <div><img src={banner2} alt='banner2' /></div>
        <div><img src={banner3} alt='banner3' /></div>
        <div><img src={banner4} alt='banner4' /></div>
        <div><img src={banner5} alt='banner5' /></div>
    </div>
  )
}
