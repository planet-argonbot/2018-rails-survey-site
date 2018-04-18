import React from 'react';
import palogo from '../assets/images/PARGON_logo_digital_COL-small.png';

function Footer(){
  return (
    <div>
      <div className="background--dark-gray padding-top-xxl padding-bottom-xxl">
        <div className="container">
          <div className="row margin-top-lg">
            <div className="col-md-3">
              <img src={palogo} className="align-middle footer-logo" alt="Planet Argon logo"/>
            </div>
            <div className="col-md-9 text-left">
              <p className="h3">About Planet Argon</p>
              <p className="margin-top-md">Based in Portland, Oregon USA, our team of developers and designers specialize in rebuilding and reimagining complex web applications for established companies. Some of the tools and strategies we use to bring ideas to life include Ruby on Rails, React.js, Angular.js, design sprints, and agile development. Whether it's a customer-facing website that needs an update, an internal tool that could benefit from a workflow redesign, or an existing app that needs ongoing maintenance – we make it happen.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-6 col-centered">
            <a className="btn btn-yellow font--black full-width" href="http://www.planetargon.com/" target="_blank" title="Planet Argon">GET IN TOUCH</a>
          </div>
        </div>
      </div>
      <div className="pa-stripe background--off-white padding-xs">
        <p className="text-center font--black">Brought to you by <a href="http://www.planetargon.com/skills/ruby-on-rails-development" target="_blank" title="Ruby on Rails development company" className="btn-small btn-small--white btn-small--inline">Planet Argon</a></p>
      </div>
    </div>
  );
}

export default Footer;
