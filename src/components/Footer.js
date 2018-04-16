import React from 'react';
import palogo from '../assets/images/PARGON_logo_digital_COL-small.png';

function Footer(){
  return (
    <div>
      <div class="background--dark-gray padding-top-xxl padding-bottom-xxl">
        <div class="container">
          <div class="row margin-top-lg">
            <div class="col-md-3">
              <img src={palogo} class="align-middle" alt="Planet Argon logo"/>
            </div>
            <div class="col-md-9 text-left">
              <p class="h3">About Planet Argon</p>
              <p class="margin-top-md">Based in Portland, Oregon USA, our team of developers and designers specialize in rebuilding and reimagining complex web applications for established companies. Some of the tools and strategies we use to bring ideas to life include Ruby on Rails, React.js, Angular.js, design sprints, and agile development. Whether it's a customer-facing website that needs an update, an internal tool that could benefit from a workflow redesign, or an existing app that needs ongoing maintenance – we make it happen.</p>
            </div>
          </div>
          <div class="col-4 col-centered">
            <a class="btn btn-yellow font--black" href="http://www.planetargon.com/" target="_blank" title="Planet Argon">GET IN TOUCH</a>
          </div>
        </div>
      </div>
      <div class="pa-stripe background--off-white padding-xs">
        <p class="text-center font--black">Brought to you by <a href="http://www.planetargon.com/skills/ruby-on-rails-development" target="_blank" title="Ruby on Rails development company" class="btn-small btn-small--white btn-small--inline">Planet Argon</a></p>
      </div>
    </div>
  );
}

export default Footer;
