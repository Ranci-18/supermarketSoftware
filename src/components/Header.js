import React, { useState } from 'react';
import user from '../assets/working.png';
import cart from '../assets/shopping-cart.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
  return (
    <div>
        <img src="/logo-png.png" alt='logo' width={180} height={180} />
        <input type='text' placeholder='search...' value={query} onChange={handleInputChange} />
        <Link to="/">Homepage</Link>
        <Link to="Banner">Offers</Link>
        <Link to="About">About RanciMatt</Link>
        <Link to="Product Listing">Product Listing</Link>
        <img src={user} alt='user account' width={80} height={80} />
        <img src={cart} alt='shopping cart' width={80} height={80} />
    </div>
  )
}
