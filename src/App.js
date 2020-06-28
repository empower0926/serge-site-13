import React from 'react';
import Welcome from './user_pannels/welcome';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  return (
    <div >
      <Welcome/>
    </div>
  );
}


AOS.init();
export default App;
