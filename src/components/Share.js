import React from 'react';

function Share(){

  function shareUrl(event, url) {
    event.preventDefault();
    window.open(url + 'http://rails-hosting.com/2018', '_blank','height=400,width=500,toolbar=0,location=0,menubar=0');
  }

  return (
    <div className="padding-top-xl padding-bottom-xl">
      <h2>Share the results with your community!</h2>
      <div className="padding-sm text-center">
        <a className="btn btn-yellow margin-right-sm" target="_blank" onClick={event => shareUrl(event, 'https://www.facebook.com/sharer/sharer.php?u=')}><i className="fa fa-facebook-official margin-right-xs"></i>Facebook</a>
        <a className="btn btn-yellow" target="_blank" onClick={event => shareUrl(event, 'https://twitter.com/share?url=')}><i className="fa fa-twitter-square margin-right-xs"></i>Twitter</a>
      </div>
    </div>
  );
}

export default Share;
