import React from 'react';

function Header(){
  return (
    <div className="navigation border--bottom">
      <div className="container border--left padding-bottom-md position--relative z-index-1">
        <div className="proudly-presents lato-italic">
          <p>proudly</p>
          <p>presents</p>
        </div>
        <div className="row padding-top-md">
          <div className="col-6 text-left">
            <a href="http://www.planetargon.com"><span className="icon-pa-site-logo pa-logo"></span></a>
          </div>
          <div className="col-6 text-right">
            <a href="http://www.planetargon.com/contact"><p className="montserrat-black">Contact</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
