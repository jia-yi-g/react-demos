import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlbalContext } from './context';

const Home = () => {
  const {openmodal,openside}=useGlbalContext()
  return (
    <main>
      <button className="btn" onClick={openmodal}>
        SHOW MODAL
      </button>
      <button
        className="sidebar-toggle"
        onClick={openside}
      >
        <FaBars />
      </button>
    </main>
  );
}

export default Home
