import React from 'react';
import axios from 'axios';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily!</h1>
      Collect feedback from your users
      <br />
      <button className="btn" onClick={axios.get('/map/cities')}>
        See SF!
      </button>
    </div>
  );
};

export default Landing;
