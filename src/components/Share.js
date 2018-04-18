import React from 'react';


function Share(){
  return (
    <div className="padding-top-xl padding-bottom-xl">
      <h2>Share the results with your community!</h2>
      <div className="padding-sm text-center">
        <a href="https://www.facebook.com/sharer/sharer.php?u=http://rails-survey.s3-website-us-west-2.amazonaws.com" className="btn-yellow margin-right-sm" target="_blank" onClick="window.open('https://www.facebook.com/sharer/sharer.php?u=http://rails-survey.s3-website-us-west-2.amazonaws.com', 'Rails Hosting Survey 2018', 'status=1,top=500,left=500,width=400,height=400,position=fixed,');"><i className="fa fa-facebook-official margin-right-xs"></i>Facebook</a>
        <a href="https://twitter.com/share?url=http://rails-survey.s3-website-us-west-2.amazonaws.com/" className="btn-yellow" target="_blank"><i className="fa fa-twitter-square margin-right-xs"></i>Twitter</a>
      </div>
    </div>
  );
}

export default Share;
