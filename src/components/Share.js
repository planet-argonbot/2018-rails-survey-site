import React, { Component } from 'react';
import styles from '.././stylesheets/index.css';

function Share(){
  return (
    <div className={styles.share}>
      <h4>Share the results with your community!</h4>
      <button>Facebook</button><button>Twitter</button><button>LinkedIn</button>


  </div>
  );
}

export default Share;
