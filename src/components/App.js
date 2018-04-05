import React, { Component } from 'react';
import Share from './Share';
import Header from './Header';
import RailsUpdates from './RailsUpdates';

class App extends Component {
  render() {
    return (
      <div class="position--relative">

      <Header />
        <div class="position--relative">
          <div class="container border--left">
            <div class="row margin-top-lg margin-bottom-md position--relative z-index-1">
              <div class="col-md-8 col-centered">
                <h1 class="font--headline text-center sm-text-left">2018 Ruby on Rails Developer<br/>
                Community Survey</h1>
                <p class="margin-top-lg margin-bottom-lg text-center">2002 members of the rails community gave us their thoughts on tools, frameworks, and workflows in order to see how the environment has changed. </p>
              </div>
            </div>
          </div>
        </div>


          <Share/>
        <div class="container text-center">
          <h2>Demographics</h2>
          <p>Here are some stats examples if we want to do quick stats. </p>
          <div class="row margin-md">
            <div class="col-md-3 margin-xs text-center background--black padding-sm">
              <p class="h1 montserrat">48</p>
              <p class="montserrat-text">countries represented in the survey</p>
            </div>
            <div class="col-md-3 margin-xs text-center background--black padding-sm">
              <p class="h1 montserrat">60%</p>
              <p class="montserrat-text">% of respondents reported they work in a product shop </p>
            </div>
            <div class="col-md-3 margin-xs text-center background--black padding-sm">
              <p class="h1 montserrat">49%</p>
              <p class="montserrat-text">of respondents have 7+ years of experience working with Rails  (79% with 4+)</p>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <h2>In the community</h2>
          <p>Between developers in agencies, product shops, and freelancer/contractors, we noticed a few interesting trends.</p>
          <div class="row margin-md">
            <div class="col-md-3 margin-xs">
              <p class="h6 text-left font--yellow">Agencies</p>
              <p class="border--yellow margin-xs background--black">More authored gems</p>
              <p class="border--yellow margin-xs background--black">More active in the community*</p>
              <p class="border--yellow margin-xs background--black">More monolith, less microsite</p>
            </div>
            <div class="col-md-3 margin-xs">
              <p class="h6 text-left font--blue">Product shops</p>
              <p class="border--blue margin-xs background--black">Tend to be on larger teams</p>
              <p class="border--blue margin-xs background--black">Better test coverage</p>
            </div>
            <div class="col-md-3 margin-xs">
              <p class="h6 text-left font--teal">Freelancers</p>
              <p class="border--teal margin-xs background--black">More likely to be self-taught</p>
              <p class="border--teal margin-xs background--black">More working in Rails for more than 10+ years</p>
            </div>
          </div>
        </div>

        <div class="container">
          <RailsUpdates/>
        </div>
      </div>
    );
  }
}

export default App;
