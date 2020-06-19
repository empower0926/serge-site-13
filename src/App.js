import React from 'react';
import User from './user_pannels/user';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div >
      <User/>
    </div>
  );
}


AOS.init();
export default App;
