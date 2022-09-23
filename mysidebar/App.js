import React  from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState } from 'react'
function App() {
  
  return (
    <main>
      <section>
        <Home />
        <Sidebar />
        <Modal />
      </section>
    </main>
  )
}

export default App
