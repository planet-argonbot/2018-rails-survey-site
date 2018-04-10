import React from 'react';

function Header(){
  return (
    <div class="navigation border--bottom">
      <div class="container border--left padding-bottom-md position--relative z-index-1">
        <div class="proudly-presents lato-italic">
          <p>proudly</p>
          <p>presents</p>
        </div>
        <div class="row padding-top-md justify-content-between">
          <div class="col-xs-6">
            <a href="http://www.planetargon.com"><span class="icon-pa-site-logo pa-logo"></span></a>
          </div>
          <div class="col-xs-6 text-right">
            <a href="http://www.planetargon.com/contact"><p class="montserrat-black">Contact</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
