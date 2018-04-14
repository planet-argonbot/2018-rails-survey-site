import React from 'react';
import palogo from '../assets/images/PARGON_logo_digital_COL-small.png';

function Footer(){
  return (
    <div>
      <div className="background--dark-gray padding-top-xxl padding-bottom-xxl">
        <div className="container">
          <div className="row margin-top-lg margin-bottom-lg">
            <div className="col-sm-3">
              <img src={palogo} className="align-middle" alt="Planet Argon logo" />
            </div>
            <div className="col-sm-9 text-left">
              <p className="h3">About Planet Argon</p>
              <p className="margin-top-md">Based in Portland, Oregon USA, our team of developers and designers specialize in rebuilding and reimagining complex web applications for established companies. Some of the tools and strategies we use to bring ideas to life include Ruby on Rails, React.js, Angular.js, design sprints, and agile development. Whether it's a customer-facing website that needs an update, an internal tool that could benefit from a workflow redesign, or an existing app that needs ongoing maintenance – we make it happen.</p>
            </div>
          </div>
          <div className="col-4 col-centered">
            <a href="http://www.planetargon.com/" title="Planet Argon" className="btn btn-yellow display--block margin-top-lg">GET IN TOUCH</a>
          </div>
        </div>
      </div>
      <div className="background--off-white padding-xs">
        <div className="container">
          <div className="col-md-12">
            <p className="text-center font--black">Brought to you by <a href="http://www.planetargon.com/skills/ruby-on-rails-development" title="Ruby on Rails development company" className="btn-small btn-small--white btn-small--inline">Planet Argon</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
