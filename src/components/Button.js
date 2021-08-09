import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
      <button className='btn'>LogOut</button>
    </Link>
  );
}
