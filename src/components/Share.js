import React from 'react';


function Share(){
  return (
    <div>
      <h4>Share the results with your community!</h4>
      <div class="margin-top-md text-center">
        <a href="#" class="btn-yellow margin-right-sm js-facebook-trigger" target="_blank"><i class="fa fa-facebook-official margin-right-xs"></i>Facebook</a>
        <a href="#" class="btn-yellow js-twitter-trigger" target="_blank"><i class="fa fa-twitter-square margin-right-xs"></i>Twitter</a>
      </div>
    </div>
  );
}

export default Share;

//
//
// <button class="btn-yellow"><span class="icon-facebook h5 align-middle"></span> Facebook</button><button class="btn-yellow"><span class="icon-twitter h5 align-middle"></span> Twitter</button>
