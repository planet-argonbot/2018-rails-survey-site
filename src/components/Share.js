import React from 'react';


function Share(){
  return (
    <div>
      <h4>Share the results with your community!</h4>
      <div class="margin-top-md text-center">
        <a href="https://www.facebook.com/sharer/sharer.php?u=http://rails-hosting.com/2018" class="btn-yellow margin-right-sm js-facebook-trigger" target="_blank"><i class="fa fa-facebook-official margin-right-xs"></i>Facebook</a>
        <a href="https://twitter.com/share?url=http://rails-hosting.com/2018" class="btn-yellow js-twitter-trigger" target="_blank"><i class="fa fa-twitter-square margin-right-xs"></i>Twitter</a>
      </div>
    </div>
  );
}

export default Share;
