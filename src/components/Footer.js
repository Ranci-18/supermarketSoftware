import React from 'react';
import x from '../assets/twitter.png';
import mail from '../assets/gmail.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';

export default function Footer() {
  return (
    <div>
        <div>
            <p>Subscribe to our newsletter</p>
            <input type='text' placeholder='Enter your email...' />
        </div>
        <img src={x} alt='x' width={50} height={50} />
        <img src={mail} alt='gmail' width={50} height={50} />
        <img src={facebook} alt='facebook' width={50} height={50} />
        <img src={instagram} alt='instagram' width={50} height={50} />
    </div>
  )
}
