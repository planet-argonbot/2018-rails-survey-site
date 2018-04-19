import React from 'react';


function Share(){

  function openShareFb(event) {
    event.preventDefault();
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=http://rails-survey.com/2018/',
      'Rails Hosting Survey 2018',
      'height=400,width=500,toolbar=0,location=0,menubar=0,'
    );
  }
  function openShareTw(event) {
    event.preventDefault();
    window.open(
      'https://twitter.com/share?url=http://rails-survey.com/2018/',
      'Rails Hosting Survey 2018',
      'height=400,width=500,toolbar=0,location=0,menubar=0,'
    );
  }

  return (
    <div className="padding-top-xl padding-bottom-xl">
      <h2>Share the results with your community!</h2>
      <div className="padding-sm text-center">
        <a className="btn btn-yellow margin-right-sm" target="_blank" onClick={openShareFb}><i className="fa fa-facebook-official margin-right-xs"></i>Facebook</a>
        <a className="btn btn-yellow" target="_blank" onClick={openShareTw}><i className="fa fa-twitter-square margin-right-xs"></i>Twitter</a>
      </div>
    </div>
  );
}

export default Share;
