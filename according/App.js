import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {data.map((item) => {
           return <SingleQuestion {...item} key={item.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
